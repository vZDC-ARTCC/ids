"use server";
import {PreferredRoute} from "@/types";
import log from "@/lib/log";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
export async function getRoutes(origin: string, dest: string) {
    if (!origin || !dest) {
        return [];
    }

    const res = await fetch(`https://api.aviationapi.com/v1/preferred-routes/search?origin=${origin}&dest=${dest}`);
    const data: PreferredRoute[] = await res.json();
    await log(`${(await getServerSession(authOptions))?.user.cid} looked up preferred routes from '${origin}' - '${dest}'`);
    return data;
}