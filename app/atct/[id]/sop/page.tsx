import React from 'react';
import {Airport} from "@prisma/client";
import { Typography } from '@mui/material';
import IdsTab from "@/components/Tabs/IdsTab";

async function SopPage({ params }: { params: { id: string, } }) {

    const { id } = params;

    const res = await fetch(`${process.env['APP_URL']}/api/airport?icao=${id}`);
    const airport: Airport = await res.json();

    if (!airport) {
        return <Typography>Airport not found</Typography>
    }

    return airport && (
        <IdsTab>
            <Typography variant="h3">{airport.faaIdentifier} SOP</Typography>
            <embed src={airport.sopLink} style={{ width: '100%', minHeight: '700px', }}/>
        </IdsTab>
    );
}

export default SopPage;