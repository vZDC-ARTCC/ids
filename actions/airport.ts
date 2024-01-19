"use server";
import prisma from "@/lib/db";

export async function fetchAllAirports(includeFlows?: boolean,) {
    return prisma.airport.findMany({
        include: {
            flows: includeFlows && {
                include: {
                    departureRunways: true,
                    arrivalRunways: true,
                },
            },
        },
    });
}
export async function fetchAirport(icao: string) {
    return prisma.airport.findFirst({
        where: {
            icao,
        },
        include: {
            runways: true,
            airspaceData: true,
        }
    });
}