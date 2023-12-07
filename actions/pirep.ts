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