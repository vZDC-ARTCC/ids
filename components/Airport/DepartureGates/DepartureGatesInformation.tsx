import React from 'react';
import {Box, Typography} from "@mui/material";
import AssignedDepartureGateList from "@/components/Airport/DepartureGates/AssignedDepartureGateList";
import {fetchParentArea} from "@/actions/traconArea";
import {Prisma, TraconSector} from "@prisma/client";
import {AirportData, DetailedAirport} from "@/app/atct/[id]/page";

const traconAreaWithRelations = Prisma.validator<Prisma.TraconAreaDefaultArgs>()({
    include: {
        parentTracon: {
            include: {
                sectors: true,
            },
        },
    },
});

export type DetailedTraconArea = Prisma.TraconAreaGetPayload<typeof traconAreaWithRelations>;

function DepartureGatesInformation({ airportData, parentTraconArea, }: { airportData: AirportData, parentTraconArea: DetailedTraconArea, }) {

    if (!parentTraconArea || !parentTraconArea.parentTracon) {
        return <Typography>TRACON not found.</Typography>
    }

    return (
        <Box sx={{ border: 1, padding: 1, minHeight: '20rem', }}>
            <Typography variant="h6">DEPARTURE GATE ASSIGNMENT</Typography>
            <AssignedDepartureGateList icao={airportData.icao} assignments={airportData.airport.departureGateAssignments} departureGates={parentTraconArea.parentTracon.departureGates.sort()} sectors={parentTraconArea.parentTracon.sectors
                .sort((a: TraconSector, b: TraconSector) => a.name.localeCompare(b.name))} />
        </Box>
    );
}

export default DepartureGatesInformation;