import {NextRequest, NextResponse} from "next/server";
import {PreferredRoute} from "@/types";

export async function GET(request: NextRequest) {

    const params = request.nextUrl.searchParams;
    const origin = params.get('origin');
    const dest = params.get('dest');
    if (!origin || !dest) {
        return NextResponse.json({
            message: 'You must specify an origin and destination',
        }, { status: 400 })
    }

    const res = await fetch(`https://api.aviationapi.com/v1/preferred-routes/search?origin=${origin}&dest=${dest}`);
    const data: PreferredRoute[] = await res.json();
    return Response.json(data);
}