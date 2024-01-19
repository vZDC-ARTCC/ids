"use client";
import React, {useEffect, useState} from 'react';
import {TraconPositionPreset, TraconSector, TraconSectorAssignment} from "@prisma/client";
import {CircularProgress, List, Typography} from "@mui/material";
import {fetchTraconAssignments} from "@/actions/traconAssignment";
import TraconSectorAssignmentItem from "@/components/Tracon/TraconSectorAssignmentItem";
import AddTraconAssignmentForm from "@/components/Tracon/AddTraconAssignmentForm";
import {fetchPresets} from "@/actions/traconPreset";

function TraconSectorAssignmentList({ faaIdentifier, sectors, }: { faaIdentifier: string, sectors: TraconSector[], }) {
    const [sectorAssignments, setSectorAssignments] = useState<TraconSectorAssignment[] | any[]>();
    const [presets, setPresets] = useState<TraconPositionPreset[] | any[]>([]);
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        if (!edit) {
            fetchTraconAssignments(faaIdentifier).then(setSectorAssignments);
            fetchPresets(faaIdentifier).then(setPresets);
            const depGatesInterval = setInterval(() => {
                fetchTraconAssignments(faaIdentifier).then(setSectorAssignments);
            }, 15000);
            return () => clearInterval(depGatesInterval);
        }
    }, [faaIdentifier, edit]);

    return (
        <List>
            { !sectorAssignments && <CircularProgress /> }
            { sectorAssignments && sectorAssignments.length === 0 && <Typography>None</Typography> }
            {sectorAssignments && sectorAssignments.map((assignment) => (
                <TraconSectorAssignmentItem key={assignment.id} sectorAssignment={assignment} allSectors={sectors} onEdit={setEdit} onDelete={() => fetchTraconAssignments(faaIdentifier).then(setSectorAssignments)}/>
            ))}
            <AddTraconAssignmentForm presets={presets} faaIdentifier={faaIdentifier} sectors={sectors} onSubmit={() => fetchTraconAssignments(faaIdentifier).then(setSectorAssignments)} />
        </List>
    );
}

export default TraconSectorAssignmentList;