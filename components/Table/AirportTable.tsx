import React from 'react';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import Link from "next/link";
import {OpenInNew} from "@mui/icons-material";
import AirportLiveWeather from "@/components/Airport/AirportLiveWeather";
import AirportInformation from "@/components/Airport/AirportInformation";
import {Airport} from "@prisma/client";

function AirportTable({ airports }: { airports: Airport[], }) {
    return (
        <>
            <Typography sx={{ padding: 1, }}>Hover over ATIS code (does not have to be online) for METAR and FLOW for runways in use.</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ICAO</TableCell>
                        <TableCell>ATIS</TableCell>
                        <TableCell>FLOW</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {airports.map((field) => (
                        <TableRow key={field.icao}>
                            <TableCell>
                                <Link href={`/atct/${field.icao}`} target="_blank" style={{ color: 'inherit', }}>
                                    <Button color="inherit" endIcon={<OpenInNew />}>{field.icao}</Button>
                                </Link>
                            </TableCell>
                            <AirportLiveWeather icao={field.icao} condensed={true} tableCell={true} />
                            <AirportInformation icao={field.icao} condensed={true} tableCell={true} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>

    );
}

export default AirportTable;