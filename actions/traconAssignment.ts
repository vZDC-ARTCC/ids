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
    if (!faaIdentifier || !sectorId || sectors.length === 0) return;
    return prisma.traconSectorAssignment.create({
        data: {
            parentSectorId: sectorId,
            childSectors: {
                connect: sectors.map((s) => ({id: s,})),
            },
        },
    });
}

export async function updateTraconAssignment(id: string, sectors: string[]) {
    if (sectors.length === 0) return;
    return prisma.traconSectorAssignment.update({
        data: {
            childSectors: {
                connect: sectors.map((s) => ({id: s,})),
            },
        },
        where: {
            id,
        },
    });
}

export async function deleteTraconAssignment(id: string){
    return prisma.traconSectorAssignment.delete({
        where: {
            id,
        }
    });
}