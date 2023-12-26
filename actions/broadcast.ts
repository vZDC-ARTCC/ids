"use server";
import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export async function fetchBroadcasts() {
    return prisma.broadcast.findMany();
}

export async function createBroadcast(message: string) {
    if (message === '') return;
    const broadcast = await prisma.broadcast.create({
        data: {
            message,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} created a broadcast: '${message}'`);
    return broadcast;
}

export async function deleteBroadcast(id: string) {
    const broadcast = await prisma.broadcast.delete({
        where: {
            id,
        },
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} deleted a broadcast: '${broadcast.message}'`);
    return broadcast;
}