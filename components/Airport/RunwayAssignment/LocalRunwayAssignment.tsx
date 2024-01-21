import React from 'react';
import {Box, Typography} from "@mui/material";
import LocalRunwayAssignmentList from "@/components/Airport/RunwayAssignment/LocalRunwayAssignmentList";
import {AirportData} from "@/app/atct/[id]/page";
import {DetailedFlow} from "@/components/Airport/AirportInformation";

function LocalRunwayAssignment({ airportData, }: { airportData: AirportData, }) {

    const activeFlow = airportData.airport.activeFlow as DetailedFlow;
    if (!activeFlow) {
        return <Typography color="red" variant="h5" sx={{ padding: 1, }}>No active flow had been selected</Typography>
    }
    const depRunwayNumbers = activeFlow.departureRunways.map((r) => r.runwayNumber);
    const arrRunwayNumbers = activeFlow.arrivalRunways.map((r) => r.runwayNumber);
    const runwaysInUse: string[] = [...depRunwayNumbers, ...arrRunwayNumbers];

    return (
        <Box sx={{ border: 1, padding: 1, }}>
            <Typography variant="h6">LOCAL RUNWAY ASSIGNMENT</Typography>
            <LocalRunwayAssignmentList icao={airportData.icao} runways={runwaysInUse.filter((r, idx) => runwaysInUse.indexOf(r) === idx)} assignments={airportData.airport.localRunwayAssignments} localPositions={airportData.airport.localControlPositions || []} />
        </Box>
    );
}

export default LocalRunwayAssignment;