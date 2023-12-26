"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {TowerRunwayAssignment} from "@prisma/client";
import {fetchLocalRunwayAssignments} from "@/actions/runwayAssignment";
import {Alert, Button, CircularProgress, List, Typography} from "@mui/material";
import LocalRunwayAssignmentItem from "@/components/Airport/RunwayAssignment/LocalRunwayAssignmentItem";
import {fetchActiveFlow} from "@/actions/flow";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";

function LocalRunwayAssignmentList({ icao, localPositions }: { icao: string, localPositions: string[] }) {

    const [assignments, setAssignments] = useState<TowerRunwayAssignment[]>([]);
    const [runways, setRunways] = useState<string[]>([]);
    const [edit, setEdit] = useState(false);
    const [assignmentsChanged, setAssignmentsChanged] = useState(false);
    const [first, setFirst] = useState(true);
    
    const updateAssignments = useCallback(() => {
        fetchLocalRunwayAssignments(icao).then((newAssignments) => {
            setAssignments((prev) => {
                if (!first && (newAssignments.length !== prev.length ||
                    !newAssignments.every((val, i) => val?.runwayIdentifiers.every((val) => prev[i]?.runwayIdentifiers?.includes(val))))) {
                    setAssignmentsChanged(true);
                }
                return newAssignments as any;
            })
        });
    }, [first, icao]);
    
    useEffect(() => {
        if (!edit) {
            updateAssignments();
            setFirst(false);
            fetchActiveFlow(icao).then((flow) => {
                const rwys = [
                    ...flow?.departureRunways.map((rwy) => rwy.runwayNumber) || [],
                    ...flow?.arrivalRunways.map((rwy) => rwy.runwayNumber) || [],
                ];
                setRunways(rwys.filter((rwy, idx) => rwys.indexOf(rwy) === idx));
            })
            const assignmentInterval = setInterval(() => {
                updateAssignments();
            }, 15000);
            return () => clearInterval(assignmentInterval);
        }
    }, [icao, edit, updateAssignments]);


    if (runways.length === 0 ) {
        return <Typography variant="h5" color="red">No active flow has been selected.</Typography>
    }
    return runways.length > 0 && (
        <List>
            <ChangeSnackbar open={assignmentsChanged} change={{ message: `${icao} CHANGES`, type: 'local_runway_assignment', }} onAcknowledge={setAssignmentsChanged} />
            { !assignments && <CircularProgress /> }
            {assignments && localPositions.map((local) => {
                const assignment = assignments.find((a) => a.localIdentifier === local);
                return (
                    <LocalRunwayAssignmentItem
                        key={local}
                        icao={icao}
                        id={assignment?.id}
                        availableRunways={runways}
                        position={local}
                        runways={assignment?.runwayIdentifiers || []}
                        changeEdit={setEdit}
                    />
                );
            })}
        </List>
    );
}

export default LocalRunwayAssignmentList;