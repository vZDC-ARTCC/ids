import DBClient from "@/prisma/db_client";

const PRISMA = DBClient.getInstance().prisma;
export async function GET() {

    const tracons = await PRISMA.tracon.findMany({
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

    const atcts: any = await PRISMA.airport.findMany({
        select: {
            icao: true,
            faaIdentifier: true,
        }
    });

    return Response.json({ tracons, atcts, });

}