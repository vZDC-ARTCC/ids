import React from 'react';
import {Box, Typography} from "@mui/material";
import LocalRunwayAssignmentList from "@/components/Airport/RunwayAssignment/LocalRunwayAssignmentList";
import {fetchAirport} from "@/actions/airport";

async function LocalRunwayAssignment({ icao }: { icao: string, }) {

    const airport = await fetchAirport(icao);

    return (
        <Box sx={{ border: 1, padding: 1, }}>
            <Typography variant="h6">LOCAL RUNWAY ASSIGNMENT</Typography>
            <LocalRunwayAssignmentList icao={icao} localPositions={airport?.localControlPositions || []} />
        </Box>
    );
}

export default LocalRunwayAssignment;