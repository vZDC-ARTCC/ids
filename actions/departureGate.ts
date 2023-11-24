"use server";

import prisma from "@/lib/db";

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
    return prisma.departureGatesAssignment.create({
        data: {
            airportId: icao,
            sectorId: sectorId,
            gates: gates,
        },
    });
}
export async function updateAssignment(id: string, gates: string[]) {
    if (gates.length === 0) return;
    return prisma.departureGatesAssignment.update({
        data: {
            gates,
        },
        where: {
            id,
        },
    });
}

export async function deleteAssignment(id: string) {
    return prisma.departureGatesAssignment.delete({
        where: {
            id,
        },
    });
}