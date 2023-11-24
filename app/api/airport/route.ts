import {NextRequest} from "next/server";
import DBClient from "@/prisma/db_client";

const prisma = DBClient.getInstance().prisma;
export async function GET(request: NextRequest) {

    const icao = request.nextUrl.searchParams.get('icao');
    if (!icao) {
        return Response.error();
    }

    const airport = await prisma.airport.findUnique({
        where: {
            icao: icao as string,
        },
        include: {
            activeFlow: true,
            runways: true,
            flows: {
                select: {
                    id: true,
                    name: true,
                    departureRunways: {
                        select: {
                            runwayNumber: true,
                            departureTypes: true,
                        },
                    },
                    arrivalRunways: {
                        select: {
                            runwayNumber: true,
                            approachTypes: true,
                        },
                    },
                }
            }
        }
    });

    return Response.json(airport);
}