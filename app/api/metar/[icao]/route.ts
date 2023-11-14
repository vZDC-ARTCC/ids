export async function GET(request: Request, { params }: { params: { icao: string, }, }) {
    const { icao } = params;

    const res = await fetch(`https://metar.vatsim.net/metar.php?id=${icao}`);
    return Response.json(await res.text());
}