"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {VatsimATISConnection} from "@/types";
import {FormControlLabel, Stack, Switch, TableCell, Tooltip, Typography} from "@mui/material";
import {fetchMetar, fetchVatsimATIS} from '@/actions/atis';
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import Link from "next/link";
import {OpenInNew} from "@mui/icons-material";



function AirportLiveWeather({ icao, condensed, tableCell }: { icao: string, condensed: boolean, tableCell?: boolean, }) {

    const [vatsimATIS, setVatsimATIS] = useState<VatsimATISConnection>();
    const [metar, setMetar] = useState<string>();
    const [atisOpen, setAtisOpen] = useState(false);
    const [metarChanged, setMetarChanged] = useState(false);
    const [atisChanged, setAtisChanged] = useState(false);
    const [first, setFirst] = useState(true);
    
    const updateAtis = useCallback(() => {
        fetchVatsimATIS(icao).then((newAtis) => {
            setVatsimATIS((prev) => {
                if (!first && newAtis?.atis_code !== prev?.atis_code) {
                    setAtisChanged(true);
                }
                return newAtis;
            })
        });
    }, [first, icao]);
    
    const updateMetar = useCallback(() => {
        fetchMetar(icao).then((newMetar) => {
            setMetar((prev) => {
                if (!first && newMetar !== prev) {
                    setMetarChanged(true);
                }
                return newMetar;
            })
        });

    }, [first, icao]);
    
    useEffect(() => {
        updateAtis();
        updateMetar();
        setFirst(false);
        const weatherInterval = setInterval(() => {
            updateAtis();
            updateMetar();
        }, 15000);
        return () => clearInterval(weatherInterval);
    }, [updateAtis, updateMetar])

    if (tableCell) {
        return <Tooltip title={metar || 'No metar found'}><TableCell>{vatsimATIS?.atis_code || '-'}</TableCell></Tooltip>
    }

    return (
        <Stack direction="column" spacing={condensed ? 1 : 2} sx={{ padding: 1, }}>
            <ChangeSnackbar open={atisChanged} change={{ message: `${icao} ${vatsimATIS?.atis_code}`, type: 'atis', }} onAcknowledge={setAtisChanged} />
            <ChangeSnackbar open={metarChanged} change={{ message: `${icao} METAR CHANGED`, type: 'atis', }} onAcknowledge={setMetarChanged} />
            <Stack direction="row" spacing={2} alignItems="center">
                <Link href={`/atct/${icao}/`} target="_blank" style={{ textDecoration: 'none', color: 'inherit', }}>
                    <Typography variant={condensed ? 'h2' : 'h1'}>{icao}<OpenInNew /></Typography>
                </Link>
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