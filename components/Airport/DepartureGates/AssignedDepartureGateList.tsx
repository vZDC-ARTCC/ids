"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, List, Typography} from "@mui/material";
import DepartureAssignmentItem from "@/components/Airport/DepartureGates/DepartureAssignmentItem";
import {DepartureGatesAssignment, TraconSector} from "@prisma/client";
import {fetchDepartureGateAssignments} from "@/actions/departureGate";
import AddAssignmentForm from "@/components/Airport/DepartureGates/AddAssignmentForm";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";

function AssignedDepartureGateList({ icao, departureGates, sectors }: { icao: string, departureGates: string[], sectors: TraconSector[] }) {

    const [depGates, setDepGates] = useState<DepartureGatesAssignment[] | any[]>([]);
    const [edit, setEdit] = useState<boolean>(false);
    const [depGatesChanged, setDepGatesChanged] = useState(false);
    const [first, setFirst] = useState(true);

    const updateGates = useCallback(() => {
        fetchDepartureGateAssignments(icao).then((newDepGates) => {
            setDepGates((prev) => {
                if (!first && (newDepGates?.length !== prev?.length ||
                    !newDepGates.every((val, i) => val?.gates.every((val) => prev[i]?.gates.includes(val))))) {
                    setDepGatesChanged(true);
                }
                return newDepGates as any;
            })
        });
    }, [first, icao]);

    useEffect(() => {
        if (!edit) {
            updateGates();
            setFirst(false);
            const depGatesInterval = setInterval(() => {
                updateGates();
            }, 15000);
            return () => clearInterval(depGatesInterval);
        }
    }, [updateGates, edit]);

    return (
        <List>
            <ChangeSnackbar open={depGatesChanged} change={{ message: `${icao} CHANGES`, type: 'departure_gate_assignment', }} onAcknowledge={setDepGatesChanged} />
            { depGates && depGates.length === 0 && <Typography>None</Typography> }
            {depGates && depGates.map((gate) => (
                <DepartureAssignmentItem key={gate.id} departureAssignment={gate} allDepartureGates={departureGates} onEdit={setEdit} onDelete={() => fetchDepartureGateAssignments(icao).then(setDepGates)}/>
            ))}
            <AddAssignmentForm icao={icao} departureGates={departureGates} sectors={sectors} onSubmit={() => fetchDepartureGateAssignments(icao).then(setDepGates)} />
        </List>
    );

}

export default AssignedDepartureGateList;