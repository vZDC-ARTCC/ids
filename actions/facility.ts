"use server";

import prisma from "@/lib/db";

export async function fetchAllFacilities() {
    const tracons = await prisma.tracon.findMany({
        select: {
            faaIdentifier: true,
            areas: {
                select: {
                    faaIdentifier: true,
                    name: true,
                }
            }
        }
    });

    const atcts: any = await prisma.airport.findMany({
        select: {
            icao: true,
            faaIdentifier: true,
        }
    });

    return { tracons, atcts, };
}