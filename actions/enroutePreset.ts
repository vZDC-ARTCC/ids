"use server";

import prisma from "@/lib/db";

export async function fetchPresets() {
    return prisma.enroutePositionPreset.findMany({
        include: {
            sectors: true,
        },
    });
}