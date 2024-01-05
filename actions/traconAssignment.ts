"use server";

import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

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
    const savedAssignment = await prisma.traconSectorAssignment.create({
        data: {
            parentSectorId: sectorId,
            childSectors: {
                connect: sectors.map((s) => ({id: s,})),
            },
        },
        include: {
            parentSector: true,
            childSectors: true,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} created a TRACON sector assignment in ${savedAssignment.parentSector.parentTraconId}: ${savedAssignment.parentSector.name} -> ${savedAssignment.childSectors.map((cs) => cs.name).join(',')}`);
    return savedAssignment;
}

export async function updateTraconAssignment(id: string, sectors: string[]) {
    const updatedAssignment = await prisma.traconSectorAssignment.update({
        data: {
            childSectors: {
                set: sectors.map((s) => ({id: s,})),
            },
        },
        where: {
            id,
        },
        include: {
            parentSector: true,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} updated a TRACON sector assignment in ${updatedAssignment.parentSector.parentTraconId}: ${updatedAssignment.parentSector.name} -> ${sectors.join(',')}`);
    return updatedAssignment;
}

export async function deleteTraconAssignment(id: string){
    const deletedAssignment = await prisma.traconSectorAssignment.delete({
        where: {
            id,
        },
        include: {
            childSectors: true,
            parentSector: true,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} deleted a TRACON sector assignment in ${deletedAssignment.parentSector.parentTraconId}: ${deletedAssignment.parentSector.name} -> ${deletedAssignment.childSectors.map((cs) => cs.name).join(',')}`);
    return deletedAssignment;
}