"use server";

import prisma from "@/lib/db";

export async function fetchTraconAssignments(faaIdentifier: string) {
    return prisma.traconSectorAssignment.findMany({
        where: {
            parentSector: {
                parentTracon: {
                    faaIdentifier,
                }
            }
        },
        include: {
            parentSector: true,
            childSectors: true,
        }
    });
}

export async function createTraconAssignment(faaIdentifier: string, sectorId: string, sectors: string[]) {

}

export async function updateTraconAssignment(id: string, sectors: string[]) {

}

export async function deleteTraconAssignment(id: string) {

}