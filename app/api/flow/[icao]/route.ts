import DBClient from "@/prisma/db_client";
import {NextRequest} from "next/server";
import {AirportFlowConfig} from "@/types";

const prisma = DBClient.getInstance().prisma;

export async function GET(request: Request, { params }: { params: { icao: string, }, }) {
    const { icao } = params;

    const flow = await prisma.airportFlow.findMany({
        where: {
            airportId: icao,
        },
    });

    return Response.json(flow);
}

export async function POST(request: NextRequest, { params }: { params: { icao: string, }, }) {
    const { icao } = params;

    const flowConfig: AirportFlowConfig = await request.json();

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
                create: flowConfig.traconVisibleOptions.map((tvo) => {
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

    return Response.json(flow);
}