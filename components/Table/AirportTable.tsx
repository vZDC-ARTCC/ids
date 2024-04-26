"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography} from "@mui/material";
import Link from "next/link";
import {OpenInNew} from "@mui/icons-material";
import {Airport, AirportFlow} from "@prisma/client";
import {fetchMetar, fetchVatsimATIS} from "@/actions/atis";
import {fetchActiveFlow} from "@/actions/flow";
import {AirportChange} from "@/types";
import {getMetarColor} from "@/lib/metar";

type AirportOverviewData = {
    icao: string,
    metar?: string,
    atisCode: string,
    activeFlow?: AirportFlow | any | undefined,
};



function AirportTable({ airports }: { airports: Airport[], }) {

    const [data, setData] = useState<AirportOverviewData[]>();
    const [changes, setChanges] = useState<AirportChange[]>([]);
    
    const getChanges = useCallback((newData: AirportOverviewData, oldData?: AirportOverviewData, ) => {
        const newChanges: AirportChange[] = [];
        if (newData?.metar !== oldData?.metar) {
            newChanges.push({ icao: newData.icao, type: "metar"});
        }
        if (newData?.atisCode !== oldData?.atisCode) {
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
            const atisCode = atis?.atis_code || '-';
            const activeFlow = await fetchActiveFlow(airport.icao);
            const airportData: AirportOverviewData = {
                icao: airport.icao,
                metar,
                atisCode,
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
    }, [airports, getChanges]);
    
    useEffect(() => {
        fetchData().then();
        const updateInterval = setInterval(() => {
            fetchData().then();
        }, 15000);
        return () => clearInterval(updateInterval);
    }, [fetchData]);

    return (
        <>
            <Typography sx={{ padding: 1, }}>Hover over ATIS code (does not have to be online) for METAR and FLOW for runways in use.</Typography>
            <Button disabled={changes.length <= 0} variant="contained" size="large" sx={{ width: '100%', }} onClick={() => setChanges([])}>Acknowledge Changes</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ICAO</TableCell>
                        <TableCell>ATIS</TableCell>
                        <TableCell>FLOW</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!data && <TableRow><TableCell><CircularProgress /></TableCell></TableRow>}
                    {data?.map((airportData) => {
                        const changesForAirport = changes.filter((c) => c.icao === airportData.icao);
                        const metarChanged = changesForAirport.find((c) => c.type === "metar");
                        const atisChanged = changesForAirport.find((c) => c.type === "atis");
                        const flowChanged = changesForAirport.find((c) => c.type === "flow");
                        return (
                            <TableRow key={airportData.icao}>
                                <TableCell>
                                    <Link href={`/atct/${airportData.icao}`} target="_blank" style={{ color: 'inherit', }}>
                                        <Button color="inherit" endIcon={<OpenInNew />}>{airportData.icao}</Button>
                                    </Link>
                                </TableCell>
                                <TableCell sx={{ border: (metarChanged || atisChanged) && 3, borderColor: (metarChanged || atisChanged) && 'red',}}>
                                    <Tooltip title={airportData.metar || 'No METAR found'}>
                                        <Typography textAlign="center" variant="h4" color={airportData.metar ? getMetarColor(airportData.metar) : 'green'} fontWeight={700}>{airportData.atisCode}</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell sx={{ border: flowChanged && 3, borderColor: flowChanged && 'red',}}>
                                    <Typography>{airportData.activeFlow?.name}</Typography>
                                </TableCell>
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </>

    );
}

export default AirportTable;