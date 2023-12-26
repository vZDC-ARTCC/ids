"use server";
import prisma from "@/lib/db";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export async function setOptionValue(id: string, value: string){
    const option = await prisma.customizableOption.update({
        data: {
            value,
        },
        where: {
            id,
        },
        include: {
            flowOption: true,
        }
    });
    await log(`${(await getServerSession(authOptions))?.user.cid} set the value of '${option.name}' to '${option.value}' at ${option.flowOption?.airportId} with flow '${option.flowOption?.name}' active`);
    return option;
}