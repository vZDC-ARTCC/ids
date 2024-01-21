"use server";
import prisma from "@/lib/db";
import {fetchMetar, fetchVatsimATIS} from "@/actions/atis";
import {AirportData, DetailedAirport} from "@/app/atct/[id]/page";

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

export async function fetchAirportData(icao: string): Promise<AirportData> {
    const metar = await fetchMetar(icao);
    const atis = await fetchVatsimATIS(icao);
    const airport = await prisma.airport.findUnique({
        where: {
            icao,
        },
        include: {
            runways: true,
            activeFlow: {
                include: {
                    departureRunways: true,
                    arrivalRunways: true,
                    traconVisibleOptions: true,
                },
            },
            departureGateAssignments: {
                include: {
                    sector: true,
                },
            },
            localRunwayAssignments: true,
            parentMajorTraconAreas: {
                include: {
                    parentTracon: {
                        include: {
                            sectors: true,
                        },
                    },
                },
            },
            parentMinorTraconAreas: {
                include: {
                    parentTracon: {
                        include: {
                            sectors: true,
                        },
                    },
                },
            },
        },
    }) as DetailedAirport;
    return {
        icao,
        metar,
        atis,
        airport,
    }
}

export async function fetchAirportsData(icaos: string[]): Promise<AirportData[]> {
    const data: AirportData[] = [];
    for (const icao of icaos) {
        data.push(await fetchAirportData(icao));
    }
    return data;
}