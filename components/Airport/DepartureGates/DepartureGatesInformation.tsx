import React from 'react';
import {Box, Typography} from "@mui/material";
import AssignedDepartureGateList from "@/components/Airport/DepartureGates/AssignedDepartureGateList";
import {fetchParentArea} from "@/actions/traconArea";

async function DepartureGatesInformation({ icao }: { icao: string, }) {

    const parentArea = await fetchParentArea(icao);

    if (!parentArea || !parentArea.parentTracon) {
        return <Typography>TRACON not found.</Typography>
    }

    return (
        <Box sx={{ border: 1, padding: 1, minHeight: '20rem', }}>
            <Typography variant="h6">DEPARTURE GATE ASSIGNMENT</Typography>
            <AssignedDepartureGateList icao={icao} departureGates={parentArea.parentTracon.departureGates} sectors={parentArea.parentTracon.sectors} />
        </Box>
    );
}

export default DepartureGatesInformation;