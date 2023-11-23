"use client";
import React, {useState} from 'react';
import {PreferredRoute} from "@/types";
import IdsTab from "@/components/Tabs/IdsTab";
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import PrdForm from "@/components/PRD/PrdForm";

function PreferredRouteTab({ defaultOriginAirport }: { defaultOriginAirport?: string, }) {

    const [routes, setRoutes] = useState<PreferredRoute[]>();

    const submit = async (origin: string, dest: string) => {
        const res = await fetch(`/api/prd?origin=${origin}&dest=${dest}`);
        const data = await res.json();
        if (data.message) alert(data.message);
        else setRoutes(data);
    }

    return (
        <>
            <Typography variant="h3">Preferred Routes Database</Typography>
            <PrdForm onSubmit={submit} defaultOriginAirport={defaultOriginAirport} />
            <Table sx={{ maxWidth: '70rem', }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Origin</TableCell>
                        <TableCell>Destination</TableCell>
                        <TableCell>Route</TableCell>
                        <TableCell>Hours (1)</TableCell>
                        <TableCell>Hours (2)</TableCell>
                        <TableCell>Hours (3)</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Area</TableCell>
                        <TableCell>Altitude</TableCell>
                        <TableCell>Aircraft</TableCell>
                        <TableCell>Flow</TableCell>
                        <TableCell>Sequence</TableCell>
                        <TableCell>Departure ARTCC</TableCell>
                        <TableCell>Arrival ARTCC</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { routes && routes.length === 0 && <Typography>No PRD routes found.</Typography>}
                    {routes && routes.map((route, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{route.origin}</TableCell>
                            <TableCell>{route.destination}</TableCell>
                            <TableCell>{route.route}</TableCell>
                            <TableCell>{route.hours1}</TableCell>
                            <TableCell>{route.hours2}</TableCell>
                            <TableCell>{route.hours3}</TableCell>
                            <TableCell>{route.type}</TableCell>
                            <TableCell>{route.area}</TableCell>
                            <TableCell>{route.altitude}</TableCell>
                            <TableCell>{route.aircraft}</TableCell>
                            <TableCell>{route.flow}</TableCell>
                            <TableCell>{route.seq}</TableCell>
                            <TableCell>{route.d_artcc}</TableCell>
                            <TableCell>{route.a_artcc}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

export default PreferredRouteTab;