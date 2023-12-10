"use server";

import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export async function fetchDepartureGateAssignments(icao: string) {
    return prisma.departureGatesAssignment.findMany({
        where: {
            airportId: icao,
        },
        include: {
            sector: true,
        },
        orderBy: {
            sector: {
                name: 'asc',
            },
        },
    });
}

export async function createAssignment(icao: string, sectorId: string, gates: string[]) {
    if (icao === '' || sectorId === '' || gates.length === 0) return;
    const departureAssignment = await prisma.departureGatesAssignment.create({
        data: {
            airportId: icao,
            sectorId: sectorId,
            gates: gates,
        },
        include: {
            sector: true,
        }
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} created a departure assignment for ${icao}: ${JSON.stringify({sector: departureAssignment.sector.name, gates})}`);
    return departureAssignment;
}
export async function updateAssignment(id: string, gates: string[]) {
    if (gates.length === 0) return;
    const departureAssignment = await prisma.departureGatesAssignment.update({
        data: {
            gates,
        },
        where: {
            id,
        },
        include: {
            sector: true,
        }
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} updated a departure assignment for ${departureAssignment.airportId}: ${JSON.stringify({departureAssignment})}`);
    return departureAssignment;
}

export async function deleteAssignment(id: string) {
    const departureAssignment = await prisma.departureGatesAssignment.delete({
        where: {
            id,
        },
        include: {
            sector: true,
        }
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} deleted a departure assignment for ${departureAssignment.airportId}: ${JSON.stringify({departureAssignment})}`);
    return departureAssignment;
}