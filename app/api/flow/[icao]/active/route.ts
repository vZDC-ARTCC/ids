import DBClient from "@/prisma/db_client";
import {NextRequest} from "next/server";

const prisma = DBClient.getInstance().prisma;

export async function GET(request: Request, { params }: { params: { icao: string, }, }) {
    const { icao } = params;

    const flow = await prisma.airportFlow.findFirst({
        where: {
            airportId: icao,
            AND: {
                flowActiveAirportId: icao,
            },
        },
        include: {
            arrivalRunways: true,
            departureRunways: true,
            traconVisibleOptions: true,
        },
    });

    console.log(flow?.departureRunways);

    return Response.json(flow);
}

export async function POST(request: NextRequest, { params }: { params: { icao: string, }, }) {
    const { icao } = params;
    const { id } = await request.json();

    await prisma.airport.update({
        data: {
            activeFlow: {
                connect: {
                    id: id
                },
            },
        },
        where: {
            icao: icao,
        }
    });

    return Response.json({ ok: true });
}