"use server";
import prisma from "@/lib/db";

export async function setOptionValue(id: string, value: string){
    return prisma.customizableOption.update({
        data: {
            value,
        },
        where: {
            id,
        },
    });
}