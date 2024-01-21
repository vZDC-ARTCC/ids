"use client";
import React, {useEffect, useState} from 'react';
import {Prisma, TraconPositionPreset, TraconSector, TraconSectorAssignment} from "@prisma/client";
import {CircularProgress, List, Typography} from "@mui/material";
import {fetchTraconAssignments} from "@/actions/traconAssignment";
import TraconSectorAssignmentItem from "@/components/Tracon/TraconSectorAssignmentItem";
import AddTraconAssignmentForm from "@/components/Tracon/AddTraconAssignmentForm";
import {fetchPresets} from "@/actions/traconPreset";

const sectorAssignmentWithRelations = Prisma.validator<Prisma.TraconSectorAssignmentDefaultArgs>()({
    include: {
        parentSector: true,
        childSectors: true,
    },
});

const presetWithRelations = Prisma.validator<Prisma.TraconPositionPresetDefaultArgs>()({
    include: {
        sectors: true,
    },
});

export type DetailedTraconPreset = Prisma.TraconPositionPresetGetPayload<typeof presetWithRelations>;

export type DetailedTraconSectorAssignment = Prisma.TraconSectorAssignmentGetPayload<typeof sectorAssignmentWithRelations>;
function TraconSectorAssignmentList({ sectorAssignments, presets, faaIdentifier, sectors, }: { sectorAssignments: DetailedTraconSectorAssignment[], presets: DetailedTraconPreset[], faaIdentifier: string, sectors: TraconSector[], }) {

    return (
        <List>
            { !sectorAssignments && <CircularProgress /> }
            { sectorAssignments && sectorAssignments.length === 0 && <Typography>None</Typography> }
            {sectorAssignments && sectorAssignments.map((assignment) => (
                <TraconSectorAssignmentItem key={assignment.id} sectorAssignment={assignment} allSectors={sectors} onDelete={() => window.location.reload()}/>
            ))}
            <AddTraconAssignmentForm presets={presets} faaIdentifier={faaIdentifier} sectors={sectors} onSubmit={() => window.location.reload()} />
        </List>
    );
}

export default TraconSectorAssignmentList;