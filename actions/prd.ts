"use server";
import {PreferredRoute} from "@/types";
export async function getRoutes(origin: string, dest: string) {
    if (!origin || !dest) {
        return [];
    }

    const res = await fetch(`https://api.aviationapi.com/v1/preferred-routes/search?origin=${origin}&dest=${dest}`);
    const data: PreferredRoute[] = await res.json();
    return data;
}