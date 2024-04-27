"use client";
import React from 'react';
import {
    EnrouteSector,
    Prisma,
} from "@prisma/client";
import {CircularProgress, List, Typography} from "@mui/material";
import EnrouteSectorAssignmentItem from "@/components/Enroute/EnrouteSectorAssignmentItem";
import AddEnrouteAssignmentForm from "@/components/Enroute/AddEnrouteAssignmentForm";

const sectorAssignmentWithRelations = Prisma.validator<Prisma.EnrouteSectorAssignmentDefaultArgs>()({
    include: {
        parentSector: true,
        childSectors: true,
    },
});

const presetWithRelations = Prisma.validator<Prisma.EnroutePositionPresetDefaultArgs>()({
    include: {
        sectors: true,
    },
});

export type DetailedEnroutePreset = Prisma.EnroutePositionPresetGetPayload<typeof presetWithRelations>;

export type DetailedEnrouteSectorAssignment = Prisma.EnrouteSectorAssignmentGetPayload<typeof sectorAssignmentWithRelations>;

function EnrouteSectorAssignmentList({ sectorAssignments, presets, sectors, }: { sectorAssignments: DetailedEnrouteSectorAssignment[], presets: DetailedEnroutePreset[], sectors: EnrouteSector[], }) {

    return (
        <List>
            { !sectorAssignments && <CircularProgress /> }
            { sectorAssignments && sectorAssignments.length === 0 && <Typography>None</Typography> }
            {sectorAssignments && sectorAssignments.map((assignment) => (
                <EnrouteSectorAssignmentItem key={assignment.id} sectorAssignment={assignment} allSectors={sectors} onDelete={() => window.location.reload()}/>
            ))}
            <AddEnrouteAssignmentForm presets={presets} sectors={sectors} onSubmit={() => window.location.reload()} />
        </List>
    );
}

export default EnrouteSectorAssignmentList;