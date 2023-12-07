"use server";
import prisma from "@/lib/db";
import {AirportFlowConfig} from "@/types";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

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
        },
        orderBy: {
            name: 'asc',
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
    const airport = await prisma.airport.update({
        data: {
            activeFlow: {
                connect: {
                    id: flowId
                },
            },
        },
        where: {
            icao,
        },
        include: {
            activeFlow: true,
        }
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} activated flow '${airport.activeFlow?.name}' at ${icao}`);
    await prisma.towerRunwayAssignment.deleteMany({
        where: {
            airportId: icao,
        }
    });
    return airport;
}

export async function createFlow(icao: string, flowConfig: AirportFlowConfig, noLog = false) {
    const flow = await prisma.airportFlow.create({
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
        },
        include: {
            departureRunways: true,
            arrivalRunways: true,
            traconVisibleOptions: true,
        },
    });
    !noLog && await log(`${(await getServerSession(authOptions))?.user.cid} created flow '${flow.name}' at ${icao}: ${JSON.stringify(flow)}`);
    return flow;
}

export async function deleteFlow(icao: string, flowId: string) {
    const flow = await prisma.airportFlow.delete({
        where: {
            airportId: icao,
            id: flowId,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} deleted flow '${flow.name}' at ${icao}`);
    return flow;
}

export async function updateFlow(icao: string, flowId: string, flowConfig: AirportFlowConfig) {
    await prisma.airportFlow.deleteMany({
        where: {
            id: flowId,
        }
    });
    const flow = await createFlow(icao, flowConfig, true);
    await log(`${(await getServerSession(authOptions))?.user.cid} updated flow '${flow.name}' at ${icao}: ${JSON.stringify(flow)}`);
    return flow;
}