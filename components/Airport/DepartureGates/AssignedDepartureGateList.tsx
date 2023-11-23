"use client";
import React, {useEffect, useState} from 'react';
import {CircularProgress, List, Typography} from "@mui/material";
import DepartureAssignmentItem from "@/components/Airport/DepartureGates/DepartureAssignmentItem";
import {DepartureGatesAssignment, TraconSector} from "@prisma/client";
import {fetchDepartureGateAssignments} from "@/actions/departureGate";
import AddAssignmentForm from "@/components/Airport/DepartureGates/AddAssignmentForm";

function AssignedDepartureGateList({ icao, departureGates, sectors }: { icao: string, departureGates: string[], sectors: TraconSector[] }) {

    const [depGates, setDepGates] = useState<DepartureGatesAssignment[] | any[]>();
    const [edit, setEdit] = useState<boolean>(false);

    useEffect(() => {
        if (!edit) {
            fetchDepartureGateAssignments(icao).then(setDepGates);
            const depGatesInterval = setInterval(() => {
                fetchDepartureGateAssignments(icao).then(setDepGates);
            }, 15000);
            return () => clearInterval(depGatesInterval);
        }
    }, [icao, edit]);

    return (
        <List>
            { !depGates && <CircularProgress /> }
            { depGates && depGates.length === 0 && <Typography>None</Typography> }
            {depGates && depGates.map((gate) => (
                <DepartureAssignmentItem key={gate.id} departureAssignment={gate} allDepartureGates={departureGates} onEdit={setEdit} onDelete={() => fetchDepartureGateAssignments(icao).then(setDepGates)}/>
            ))}
            <AddAssignmentForm icao={icao} departureGates={departureGates} sectors={sectors} onSubmit={() => fetchDepartureGateAssignments(icao).then(setDepGates)} />
        </List>
    );

}

export default AssignedDepartureGateList;