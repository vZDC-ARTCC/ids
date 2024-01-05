"use server";

import prisma from "@/lib/db";

export async function fetchPresets(faaIdentifier: string) {
    return prisma.traconPositionPreset.findMany({
        where: {
            traconId: faaIdentifier,
        },
        include: {
            sectors: true,
        },
    });
}