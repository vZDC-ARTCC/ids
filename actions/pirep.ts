"use server";
import {Pirep} from "@prisma/client";
import prisma from "@/lib/db";

export async function fetchPireps() {
    await deleteExpiredPireps();
    return prisma.pirep.findMany({
        orderBy: {
            urgency: 'desc'
        }
    });
}

export async function createPirep(pirep: Pirep) {
    return prisma.pirep.create({
        data: pirep,
    });
}

export async function deletePirep(id: string) {
    return prisma.pirep.delete({
        where: {
            id,
        },
    });
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