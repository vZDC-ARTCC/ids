import prisma from "@/lib/db";

export default async function log(msg: string) {
    await prisma.log.create({
        data: {
            message: msg,
            date: new Date(),
        }
    });
}