"use server";

import prisma from "@/lib/db";

export async function fetchLoas(traconFaaIdentifier: string) {
    return prisma.loaData.findMany({
        where: {
            traconId: traconFaaIdentifier,
        },
        orderBy: {
            targetFacility: 'asc',
        },
    });
}