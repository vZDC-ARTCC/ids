"use server";
import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export async function fetchEnrouteAssignments() {
    return prisma.enrouteSectorAssignment.findMany({
        include: {
            parentSector: true,
            childSectors: true,
        }
    });
}
export async function createEnrouteAssignment(parentSectorId: string, childSectorIds: string[]) {
    if (!parentSectorId || childSectorIds.length === 0) return;
    const savedAssignment = await prisma.enrouteSectorAssignment.create({
        data: {
            parentSectorId: parentSectorId,
            childSectors: {
                connect: childSectorIds.map((s) => ({id: s,})),
            },
        },
        include: {
            parentSector: true,
            childSectors: true,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} created an enroute sector assignment in ${savedAssignment.parentSector.enrouteId}: ${savedAssignment.parentSector.name} -> ${savedAssignment.childSectors.map((cs) => cs.name).join(',')}`);
    return savedAssignment;
}

export async function updateEnrouteAssignment(id: string, sectors: string[]) {
    const updatedAssignment = await prisma.enrouteSectorAssignment.update({
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
    await log(`${(await getServerSession(authOptions))?.user.cid} updated an enroute sector assignment in ${updatedAssignment.parentSector.enrouteId}: ${updatedAssignment.parentSector.name} -> ${sectors.join(',')}`);
    return updatedAssignment;
}

export async function deleteEnrouteAssignment(id: string){
    const deletedAssignment = await prisma.enrouteSectorAssignment.delete({
        where: {
            id,
        },
        include: {
            childSectors: true,
            parentSector: true,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} deleted an enroute sector assignment in ${deletedAssignment.parentSector.enrouteId}: ${deletedAssignment.parentSector.name} -> ${deletedAssignment.childSectors.map((cs) => cs.name).join(',')}`);
    return deletedAssignment;
}