"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography} from "@mui/material";
import Link from "next/link";
import {OpenInNew} from "@mui/icons-material";
import {Airport, AirportFlow} from "@prisma/client";
import {fetchMetar, fetchVatsimATIS} from "@/actions/atis";
import {fetchActiveFlow, fetchFlows} from "@/actions/flow";

type AirportOverviewData = {
    icao: string,
    metar?: string,
    atisCode: string,
    activeFlow?: AirportFlow | any | undefined,
    flows: AirportFlow[],
};

type AirportTableChange = {
    icao: string,
    type: "atis" | "flow" | "metar",
}

function AirportTable({ airports }: { airports: Airport[], }) {

    const [data, setData] = useState<AirportOverviewData[]>();
    const [changes, setChanges] = useState<AirportTableChange[]>([]);
    
    const getChanges = useCallback((newData: AirportOverviewData, oldData?: AirportOverviewData, ) => {
        const newChanges: AirportTableChange[] = [];
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

    const fetchData = useCallback(async (prev?: AirportOverviewData[]) => {
        const newData: typeof data = [];
        const newChanges: AirportTableChange[] = [];
        for (const airport of airports) {
            const oldData = prev?.find((d) => d.icao === airport.icao);
            const metar = await fetchMetar(airport.icao);
            const atis = await fetchVatsimATIS(airport.icao);
            const atisCode = atis?.atis_code || '-';
            const activeFlow = await fetchActiveFlow(airport.icao);
            const flows = prev ? await fetchFlows(airport.icao) : oldData?.flows || [];
            const airportData: AirportOverviewData = {
                icao: airport.icao,
                metar,
                atisCode,
                activeFlow,
                flows,
            };
            if (prev) {
                newChanges.push(...getChanges(airportData, oldData));
            }
            newData.push(airportData);
        }
        setChanges((prev) => [...prev, ...newChanges]);
        return newData;
    }, [airports, getChanges]);
    
    useEffect(() => {
        fetchData(data).then(setData);
        const updateInterval = setInterval(() => {
            fetchData(data).then(setData);
        }, 5000);
        return () => clearInterval(updateInterval);
    }, [data, fetchData]);

    return (
        <>
            <Typography sx={{ padding: 1, }}>Hover over ATIS code (does not have to be online) for METAR and FLOW for runways in use.</Typography>
            <Button disabled={changes.length <= 0} variant="contained" size="large" onClick={() => setChanges([])}>Acknowledge Changes</Button>
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
                                        <Typography textAlign="center" variant="h4" color="green" fontWeight={700}>{airportData.atisCode}</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell sx={{ border: flowChanged && 3, borderColor: flowChanged && 'red',}}>
                                    <Typography>{airportData.activeFlow?.name}</Typography>
                                </TableCell>
                            </TableRow>
                        )
                    }
                    )}
                    {/*{airports.map((field) => (*/}
                    {/*    <TableRow key={field.icao}>*/}
                    {/*        <TableCell>*/}
                    {/*            <Link href={`/atct/${field.icao}`} target="_blank" style={{ color: 'inherit', }}>*/}
                    {/*                <Button color="inherit" endIcon={<OpenInNew />}>{field.icao}</Button>*/}
                    {/*            </Link>*/}
                    {/*        </TableCell>*/}
                    {/*        <AirportLiveWeather icao={field.icao} condensed={true} tableCell={true} />*/}
                    {/*        <AirportInformation icao={field.icao} condensed={true} tableCell={true} />*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </>

    );
}

export default AirportTable;