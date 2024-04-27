"use client";
import React, {useState} from 'react';
import {VatsimATISConnection} from "@/types";
import {FormControlLabel, Stack, Switch, Typography} from "@mui/material";
import Link from "next/link";
import {OpenInNew} from "@mui/icons-material";
import {getMetarColor} from "@/lib/metar";


function AirportLiveWeather({ icao, metar, atis, condensed }: { icao: string, metar: string | undefined, atis: VatsimATISConnection | undefined, condensed: boolean, }) {

    const [atisOpen, setAtisOpen] = useState(false);

    return (
        <Stack direction="column" spacing={condensed ? 1 : 2} sx={{ padding: 1, }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Link href={`/atct/${icao}/`} target="_blank" style={{ textDecoration: 'none', color: 'inherit', }}>
                    <Typography variant={condensed ? 'h2' : 'h1'}>{icao}<OpenInNew /></Typography>
                </Link>
                <Typography variant="h1" color={metar ? getMetarColor(metar) : 'green'} fontWeight={700}
                            fontSize={condensed ? 100 : 150}>{atis?.atis_code || '-'}</Typography>
            </Stack>
            <FormControlLabel control={
                <Switch disabled={!atis} value={atisOpen} onChange={(e) => setAtisOpen(e.target.checked)} />
            } label="Show VATSIM ATIS" />
            {atisOpen && atis && <Typography variant={condensed ? 'h5' : 'h4'}
                                             letterSpacing={3}>{atis?.text_atis?.join(' ') || 'No VATSIM ATIS online'}</Typography>}
            <Typography variant={condensed ? 'h5' : 'h4'} color="darkviolet"
                        fontWeight={700}>{metar || 'No METAR found.'}</Typography>
        </Stack>
    );
}

export default AirportLiveWeather;