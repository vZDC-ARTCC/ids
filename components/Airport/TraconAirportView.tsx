"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Airport, AirportFlow, CustomizableOption} from "@prisma/client";
import {Box, Button, CircularProgress, Grid, Stack, Typography} from "@mui/material";
import {AirportChange, VatsimATISConnection} from "@/types";
import {fetchMetar, fetchVatsimATIS} from "@/actions/atis";
import {fetchActiveFlow} from "@/actions/flow";
import {OpenInNew} from "@mui/icons-material";
import Link from "next/link";
import FlowDisplay from "@/components/Flow/FlowDisplay";
import OptionSelect from "@/components/Airport/Option/OptionSelect";
import {setOptionValue} from "@/actions/option";

type AirportDataEntry = {
    icao: string,
    metar?: string,
    atis?: VatsimATISConnection,
    activeFlow?: AirportFlow | any,
}
export default TraconAirportView;

function TraconAirportView({ airports, }: { airports: Airport[], }) {

    const [data, setData] = useState<AirportDataEntry[]>();
    const [changes, setChanges] = useState<AirportChange[]>([]);

    const getChanges = useCallback((newData: AirportDataEntry, oldData?: AirportDataEntry, ) => {
        const newChanges: AirportChange[] = [];
        if (newData?.metar !== oldData?.metar) {
            newChanges.push({ icao: newData.icao, type: "metar"});
        }
        if (newData?.atis?.atis_code !== oldData?.atis?.atis_code) {
            newChanges.push({ icao: newData.icao, type: "atis"});
        }
        if (newData?.activeFlow?.id !== oldData?.activeFlow?.id) {
            newChanges.push({ icao: newData.icao, type: "flow"});
        }
        return newChanges;
    }, []);

    const fetchData = useCallback(async () => {
        const newData: typeof data = [];
        for (const airport of airports) {
            const metar = await fetchMetar(airport.icao);
            const atis = await fetchVatsimATIS(airport.icao);
            const activeFlow = await fetchActiveFlow(airport.icao);
            const airportData: AirportDataEntry = {
                icao: airport.icao,
                metar,
                atis,
                activeFlow,
            };
            newData.push(airportData);
        }
        setData((prev) => {
            const newChanges: AirportChange[] = [];
            for (const i of newData) {
                if (prev) {
                    newChanges.push(...getChanges(i, prev.find((a) => a.icao === i.icao)));
                }
            }
            setChanges((prev) => [...prev, ...newChanges]);
            return newData;
        });
    }, [airports, getChanges])

    useEffect(() => {
        fetchData().then();
        const updateInterval = setInterval(() => {
            fetchData().then();
        }, 15000);
        return () => clearInterval(updateInterval);
    }, [fetchData]);

    if (!data) {
        return <CircularProgress />
    }

    return data && (
        <>
            {data.map((d) => (
                <Grid key={d.icao} item xs sx={{ border: 1, }}>
                    <Box sx={{ minWidth: '200px', padding: 1, }}>
                        { changes.filter((c) => c.icao === d.icao).length > 0 && <Button variant="contained" size="large" sx={{ width: '100%', }} onClick={() => setChanges(changes.filter((c) => c.icao !== d.icao))}>Acknowledge Changes</Button> }
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
                                <Link href={`/atct/${d.icao}/`} target="_blank" style={{ textDecoration: 'none', color: 'inherit', }}>
                                    <Typography variant="h2">{d.icao}<OpenInNew /></Typography>
                                </Link>
                                <Typography variant="h1" color="green" fontWeight={700} fontSize={100}>{d.atis?.atis_code || '-'}</Typography>
                            </Stack>
                            <Typography variant="h6" color="darkviolet" fontWeight={700}>{d?.metar || 'No METAR found.'}</Typography>
                            { !d.activeFlow && <Typography variant="h5" color="red" fontWeight={700}>No active flow selected</Typography> }
                            { d.activeFlow && <FlowDisplay flow={d.activeFlow} condensed={true} /> }
                            { d.activeFlow && d.activeFlow.traconVisibleOptions.map((option: CustomizableOption) => (
                                <Stack key={option.id} direction="column" alignItems="center" spacing={1}>
                                    <Typography variant="h6" color="gold" fontWeight={700}>{option.name}</Typography>
                                    <OptionSelect option={option} condensed={false} changeValue={(val) => {
                                        setOptionValue(option.id, val || '').then(() => {
                                            fetchData();
                                        });
                                    }}/>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>



                </Grid>
            ))}

        </>
    );
}
