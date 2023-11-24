"use server";
import prisma from "@/lib/db";

export async function fetchAvailableRunways(icao: string) {
    return prisma.airport.findUnique({
        where: {
            icao,
        },
        select: {
            runways: true,
        }
    });
}