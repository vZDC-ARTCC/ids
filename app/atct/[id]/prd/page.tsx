import React from 'react';
import PreferredRouteTab from "@/components/Tabs/PreferredRouteTab";
import {Airport} from "@prisma/client";
import {Typography} from "@mui/material";

async function PreferredRoutesPage({ params }: { params: { id: string, }, }) {

    const { id } = params;

    const res = await fetch(`${process.env['APP_URL']}/api/airport?icao=${id}`);
    const airport: Airport = await res.json();

    if (!airport) {
        return <Typography>Airport not found</Typography>
    }

    return airport && <PreferredRouteTab defaultOriginAirport={airport.faaIdentifier} />
}

export default PreferredRoutesPage;