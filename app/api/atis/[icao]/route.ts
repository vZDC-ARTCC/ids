import {VatsimATISConnection} from "@/types";

const VATSIM_DATA_URL = "https://data.vatsim.net/v3/vatsim-data.json";
export async function GET(request: Request, { params }: { params: { icao: string, }, }) {

    const { icao } = params;
    const res = await fetch(VATSIM_DATA_URL, {
        cache: "no-cache",
    });
    const { atis }: { atis: VatsimATISConnection[] } = await res.json();
    const filteredAtisConnections = atis.filter((atisConnection) => atisConnection.callsign.startsWith(icao));

    if (filteredAtisConnections.length === 0) {
        return Response.json(null);
    } else {
        return Response.json(filteredAtisConnections[0]);
    }
}