"use client";
import React, {useEffect, useState} from 'react';
import {List, Typography} from "@mui/material";
import DepartureAssignmentItem from "@/components/Airport/DepartureGates/DepartureAssignmentItem";
import {Prisma, TraconSector} from "@prisma/client";
import AddAssignmentForm from "@/components/Airport/DepartureGates/AddAssignmentForm";

const departureGateAssignmentWithRelations = Prisma.validator<Prisma.DepartureGatesAssignmentDefaultArgs>()({
    include: {
        sector: true,
    },
});

export type DetailedDepartureGatesAssignment = Prisma.DepartureGatesAssignmentGetPayload<typeof departureGateAssignmentWithRelations>;

function AssignedDepartureGateList({ icao, assignments, departureGates, sectors }: { icao: string, assignments: DetailedDepartureGatesAssignment[], departureGates: string[], sectors: TraconSector[] }) {

    return (
        <List>
            { assignments.length === 0 && <Typography>None</Typography> }
            { assignments.map((gate) => (
                <DepartureAssignmentItem key={gate.id} departureAssignment={gate} allDepartureGates={departureGates} onDelete={() => window.location.reload()}/>
            ))}
            <AddAssignmentForm icao={icao} departureGates={departureGates} sectors={sectors} onSubmit={() => window.location.reload()} />
        </List>
    );

}

export default AssignedDepartureGateList;