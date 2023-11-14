import React from 'react';
import ChartsTab from "@/components/Tabs/ChartsTab";
import {Airport} from "@prisma/client";
import {Typography} from "@mui/material";

async function ProceduresPage({ params }: { params: { id: string,}, }) {

    const { id } = params;

    const res = await fetch(`${process.env['APP_URL']}/api/airport?icao=${id}`);
    const airport: Airport = await res.json();

    if (!airport) {
        return <Typography>Airport not found</Typography>
    }

    return airport && (
        <ChartsTab icao={airport.icao} />
    );
}

export default ProceduresPage;