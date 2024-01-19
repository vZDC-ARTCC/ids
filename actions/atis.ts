"use server";

import {VatsimATISConnection} from "@/types";

const VATSIM_DATA_URL = "https://data.vatsim.net/v3/vatsim-data.json";
const VATSIM_METAR_URL = "https://metar.vatsim.net/metar.php";
export const fetchVatsimATIS = async (icao: string) => {
    const res = await fetch(VATSIM_DATA_URL, {
        cache: "no-store",
    });
    const { atis }: { atis: VatsimATISConnection[] } = await res.json();
    const filteredAtisConnections = atis.filter((atisConnection) => atisConnection.callsign.startsWith(icao));

    if (filteredAtisConnections.length === 0) {
        return undefined;
    } else {
        return filteredAtisConnections[0];
    }
}

export const fetchMetar = async (icao: string) => {
    const res = await fetch(`${VATSIM_METAR_URL}?id=${icao}`, {
        cache: "no-store",
    });
    return await res.text();
}
