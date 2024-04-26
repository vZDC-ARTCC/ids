"use server";
import {Pirep} from "@prisma/client";
import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export async function fetchPireps() {
    await deleteExpiredPireps();
    return prisma.pirep.findMany({
        orderBy: {
            urgency: 'desc'
        }
    });
}

export async function createPirep(pirep: Pirep) {
    const savedPirep = await prisma.pirep.create({
        data: pirep,
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} filed a PIREP: ${JSON.stringify(pirep)}`);
    console.log(process.env.SIMTRAFFIC_KEY)
    const res = await fetch(`https://api.simtraffic.net/v1/pirep`, {
        method: 'POST',
        headers: {
            "Authorization": process.env.SIMTRAFFIC_KEY || '',
        },
        body: JSON.stringify({
            position: pirep.location,
            data: {
                observation_time: pirep.time.toString(),
                raw_text: pirep.remarks,
                aircraft_ref: pirep.aircraftType,
                altitude_ft_msl: Number(pirep.flightLevel.substring(2))*100,
                pirep_type: pirep.urgency === "URGENT" ? "UUA" : "UA",
            },
        }),
    });
    console.log(await res.json());
    return savedPirep;
}

export async function deletePirep(id: string) {
    const pirep = await prisma.pirep.delete({
        where: {
            id,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} deleted a PIREP: ${JSON.stringify(pirep)}`);
    return pirep;
}

export async function deleteExpiredPireps() {
    return prisma.pirep.deleteMany({
        where: {
            AND: [
                {
                    time: {
                        lte: subtractHour(new Date(), 1)
                    },
                },
            ],
        },
    });

}

const subtractHour = (date: Date, hour: number) => {
    date.setUTCHours(date.getUTCHours() - hour);
    return date;
}