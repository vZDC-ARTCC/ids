"use client";
import React, {useEffect, useState} from 'react';
import {
    EnrouteSector,
    EnrouteSectorAssignment,
} from "@prisma/client";
import {CircularProgress, List, Typography} from "@mui/material";
import {fetchPresets} from "@/actions/enroutePreset";
import {EnroutePreset} from "@/types";
import {fetchEnrouteAssignments} from "@/actions/enrouteAssignment";
import EnrouteSectorAssignmentItem from "@/components/Enroute/EnrouteSectorAssignmentItem";
import AddEnrouteAssignmentForm from "@/components/Enroute/AddEnrouteAssignmentForm";

function EnrouteSectorAssignmentList({ sectors, }: { sectors: EnrouteSector[], }) {
    const [sectorAssignments, setSectorAssignments] = useState<EnrouteSectorAssignment[] | any[]>();
    const [presets, setPresets] = useState<EnroutePreset[] | any[]>([]);
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        if (!edit) {
            fetchEnrouteAssignments().then(setSectorAssignments);
            fetchPresets().then(setPresets);
            const depGatesInterval = setInterval(() => {
                fetchEnrouteAssignments().then(setSectorAssignments);
            }, 15000);
            return () => clearInterval(depGatesInterval);
        }
    }, [edit]);

    return (
        <List>
            { !sectorAssignments && <CircularProgress /> }
            { sectorAssignments && sectorAssignments.length === 0 && <Typography>None</Typography> }
            {sectorAssignments && sectorAssignments.map((assignment) => (
                <EnrouteSectorAssignmentItem key={assignment.id} sectorAssignment={assignment} allSectors={sectors} onEdit={setEdit} onDelete={() => fetchEnrouteAssignments().then(setSectorAssignments)}/>
            ))}
            <AddEnrouteAssignmentForm presets={presets} sectors={sectors} onSubmit={() => fetchEnrouteAssignments().then(setSectorAssignments)} />
        </List>
    );
}

export default EnrouteSectorAssignmentList;