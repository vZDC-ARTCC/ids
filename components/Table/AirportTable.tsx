"use client";
import React, {useEffect, useState} from 'react';
import {Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, Typography} from "@mui/material";
import Link from "next/link";
import {OpenInNew} from "@mui/icons-material";
import {Airport} from "@prisma/client";
import {AirportData} from "@/app/atct/[id]/page";
import {fetchAirportsData} from "@/actions/airport";
import {InformationChange} from "@/components/ChangeAnnouncer/information_change";
import {getAtctChanges} from "@/lib/atct";

function AirportTable({ airports }: { airports: Airport[], }) {

    const [data, setData] = useState<AirportData[]>();
    const [changes, setChanges] = useState<InformationChange[]>([]);

    useEffect(() => {
        fetchAirportsData(airports.map((a) => a.icao)).then((data) => {
            setData((prev) => {
                const newChanges: InformationChange[] = [];
                for (const i of data) {
                    if (prev) {
                        newChanges.push(...getAtctChanges(prev.find((p) => p.icao === i.icao), i));
                    }
                }
                setChanges((prev) => [...prev, ...newChanges]);
                return data;
            })
        });
    }, [airports]);

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
                        const changesForAirport = changes.filter((c) => c.message.startsWith(airportData.icao));
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
                                        <Typography textAlign="center" variant="h4" color="green" fontWeight={700}>{airportData.atis?.atis_code || '-'}</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell sx={{ border: flowChanged && 3, borderColor: flowChanged && 'red',}}>
                                    <Typography>{airportData.airport.activeFlow?.name}</Typography>
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