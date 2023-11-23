"use server";

import prisma from "@/lib/db";

export async function fetchAirport(icao: string) {
    return prisma.airport.findFirst({
        where: {
            icao,
        },
        include: {
            runways: true,
        }
    });
}