"use client";
import React, {useEffect, useState} from 'react';
import {TraconSector, TraconSectorAssignment} from "@prisma/client";
import {CircularProgress, List, Typography} from "@mui/material";
import {fetchTraconAssignments} from "@/actions/traconAssignment";
import TraconSectorAssignmentItem from "@/components/Split/TraconSectorAssignmentItem";
import AddTraconAssignmentForm from "@/components/Split/AddTraconAssignmentForm";

function TraconSectorAssignmentList({ faaIdentifier, sectors, }: { faaIdentifier: string, sectors: TraconSector[], }) {
    const [sectorAssignments, setSectorAssignments] = useState<TraconSectorAssignment[] | any[]>();
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        if (!edit) {
            fetchTraconAssignments(faaIdentifier).then(setSectorAssignments);
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
            <AddTraconAssignmentForm faaIdentifier={faaIdentifier} sectors={sectors} onSubmit={() => fetchTraconAssignments(faaIdentifier).then(setSectorAssignments)} />
        </List>
    );
}

export default TraconSectorAssignmentList;