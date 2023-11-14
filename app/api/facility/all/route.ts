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

    const airports = await PRISMA.airport.findMany({
        select: {
            icao: true,
            faaIdentifier: true,
        }
    });

    const traconArray: any = [];
    const atcts: any = airports;
    for (const tracon of tracons) {
        traconArray.push({
            faaIdentifier: tracon.faaIdentifier,
            areas: tracon.areas,
        })
    }

    return Response.json({ tracons, atcts, });

}