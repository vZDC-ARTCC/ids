"use server";
import prisma from "@/lib/db";
import {AirportFlowConfig} from "@/types";

export async function fetchActiveFlow(icao: string) {
    return prisma.airportFlow.findFirst({
        where: {
            flowActiveAirportId: icao,
        },
        include: {
            departureRunways: true,
            arrivalRunways: true,
            traconVisibleOptions: {
                orderBy: {
                    name: 'asc',
                }
            },
        },
    });
}

export async function fetchFlows(icao: string) {
    return prisma.airportFlow.findMany({
        where: {
            airportId: icao,
        },
        include: {
            departureRunways: true,
            arrivalRunways: true,
            traconVisibleOptions: true,
        }
    })
}

export async function fetchFlow(icao: string, flowId: string) {
    return prisma.airportFlow.findFirst({
        where: {
            airportId: icao,
            id: flowId,
        },
        include: {
            departureRunways: true,
            arrivalRunways: true,
            traconVisibleOptions: true,
        }
    })
}

export async function setActiveFlow(icao: string, flowId: string) {
    return prisma.airport.update({
        data: {
            activeFlow: {
                connect: {
                    id: flowId
                },
            },
        },
        where: {
            icao,
        }
    });
}

export async function createFlow(icao: string, flowConfig: AirportFlowConfig) {
    return prisma.airportFlow.create({
        data: {
            name: flowConfig.name,
            departureRunways: {
                create: flowConfig.departureRunways.map((rwy) => {
                    return {
                        runwayNumber: rwy.id,
                        departureTypes: rwy.availableDepartureTypes,
                    };
                }),
            },
            arrivalRunways: {
                create: flowConfig.arrivalRunways.map((rwy) => {
                    return {
                        runwayNumber: rwy.id,
                        approachTypes: rwy.availableApproachTypes,
                    };
                }),
            },
            traconVisibleOptions: {
                create: flowConfig.traconVisibleOptions?.map((tvo) => {
                    return {
                        name: tvo.name,
                        choices: tvo.choices,
                    };
                }),
            },
            airport: {
                connect: {
                    icao,
                }
            },
        }
    });
}

export async function deleteFlow(icao: string, flowId: string) {
    return prisma.airportFlow.delete({
        where: {
            airportId: icao,
            id: flowId,
        },
    });
}

export async function updateFlow(icao: string, flowId: string, flowConfig: AirportFlowConfig) {
    await prisma.airportFlow.deleteMany({
        where: {
            id: flowId,
        }
    });
    return createFlow(icao, flowConfig);
}