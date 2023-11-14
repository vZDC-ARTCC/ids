import React from 'react';
import {Grid, Typography} from "@mui/material";
import AtisLetter from "@/components/AtisInformation/AtisLetter";
import {VatsimATISConnection} from "@/types";
import AirportFlowDisplay from '@/components/AtisInformation/AirportFlowDisplay';
import {Airport} from "@prisma/client";

async function AirportHeader({ icao }: { icao: string }) {

    const res = await fetch(`${process.env['APP_URL']}/api/airport?icao=${icao}`);
    const airport: Airport = await res.json();

    if (!airport) {
        return <Typography>Airport not found</Typography>
    }

    const fetchVatsimAtis = async (icao: string) => {
        const res = await fetch(`${process.env['APP_URL']}/api/atis/${icao}`, {
            next: {
                revalidate: 15,
            }
        });
        const data: VatsimATISConnection | null = await res.json();
        return data;
    };

    const fetchMetar = async (icao: string) => {
        const res = await fetch(`${process.env['APP_URL']}/api/metar/${icao}`, {
            next: {
                revalidate: 15,
            }
        });
        return await res.text();
    };

    const formatAtisText = (atisText: string[]) => {
        if (!atisText) return null;
        let result = '';
        atisText.forEach((text) => {
            result += ' ' + text;
        });
        return result;
    }

    const vatsimATIS = await fetchVatsimAtis(airport.icao) || undefined;
    return (
        <Grid container columns={20}>
            <Grid item xs={20} xl={1} sx={{ border: 1, }}>
                <AtisLetter vatsimATIS={vatsimATIS} />
            </Grid>
            <Grid item xs={20} lg={14} sx={{ padding: '2rem', border: 1, }}>
                <Typography variant="h2">{icao}</Typography>
                <Typography variant="h6">{ vatsimATIS ? formatAtisText(vatsimATIS.text_atis) : 'No ATIS online' }</Typography>
                <Typography variant="h5" color="blueviolet" sx={{ marginTop: '1rem', fontWeight: 600, }}>LIVE METAR: {await fetchMetar(airport.icao)}</Typography>
            </Grid>
            <Grid item xs={20} md={5} sx={{ padding: '2rem', border: 1, }}>
                <AirportFlowDisplay icao={airport.icao} />
            </Grid>
        </Grid>
    );
}

export default AirportHeader;