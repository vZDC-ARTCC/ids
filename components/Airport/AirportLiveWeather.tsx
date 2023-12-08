"use client";
import React, {useEffect, useState} from 'react';
import {VatsimATISConnection} from "@/types";
import {FormControlLabel, Stack, Switch, Typography} from "@mui/material";

const VATSIM_DATA_URL = "https://data.vatsim.net/v3/vatsim-data.json";
const VATSIM_METAR_URL = "https://metar.vatsim.net/metar.php";
const fetchVatsimATIS = async (icao: string) => {
    const res = await fetch(VATSIM_DATA_URL, {
        next: {
            revalidate: 15,
        }
    });
    const { atis }: { atis: VatsimATISConnection[] } = await res.json();
    const filteredAtisConnections = atis.filter((atisConnection) => atisConnection.callsign.startsWith(icao));

    if (filteredAtisConnections.length === 0) {
        return undefined;
    } else {
        return filteredAtisConnections[0];
    }
}

const fetchMetar = async (icao: string) => {
    const res = await fetch(`${VATSIM_METAR_URL}?id=${icao}`, {
        next: {
            revalidate: 15,
        }
    });
    return await res.text();
}

function AirportLiveWeather({ icao, condensed, }: { icao: string, condensed: boolean, }) {

    const [vatsimATIS, setVatsimATIS] = useState<VatsimATISConnection>();
    const [metar, setMetar] = useState<string>();
    const [atisOpen, setAtisOpen] = useState(false);

    useEffect(() => {
        fetchVatsimATIS(icao).then(setVatsimATIS);
        fetchMetar(icao).then(setMetar);
        const weatherInterval = setInterval(() => {
            fetchVatsimATIS(icao).then(setVatsimATIS);
            fetchMetar(icao).then(setMetar);
        }, 15000);
        return () => clearInterval(weatherInterval);
    }, [icao])

    return (
        <Stack direction="column" spacing={condensed ? 1 : 2} sx={{ padding: 1, }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant={condensed ? 'h2' : 'h1'}>{icao}</Typography>
                <Typography variant="h1" color="green" fontWeight={700} fontSize={condensed ? 100 : 150}>{vatsimATIS?.atis_code || '-'}</Typography>
            </Stack>
            <FormControlLabel control={
                <Switch disabled={!vatsimATIS} value={atisOpen} onChange={(e) => setAtisOpen(e.target.checked)} />
            } label="Show VATSIM ATIS" />
            { atisOpen && vatsimATIS && <Typography variant={condensed ? 'h5' : 'h4'} letterSpacing={3}>{vatsimATIS?.text_atis?.join(' ') || 'No VATSIM ATIS online'}</Typography> }
            <Typography variant={condensed ? 'h5' : 'h4'} color="darkviolet" fontWeight={700}>{metar || 'No METAR found.'}</Typography>
        </Stack>
    );
}

export default AirportLiveWeather;