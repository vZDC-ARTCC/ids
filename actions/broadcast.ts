"use server";
import prisma from "@/lib/db";

export async function fetchBroadcasts() {
    return prisma.broadcast.findMany();
}

export async function createBroadcast(message: string) {
    if (message === '') return;
    return prisma.broadcast.create({
        data: {
            message,
        },
    });
}

export async function deleteBroadcast(id: string) {
    return prisma.broadcast.delete({
        where: {
            id,
        },
    });
}