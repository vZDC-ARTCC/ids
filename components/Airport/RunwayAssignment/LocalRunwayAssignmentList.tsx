"use client";
import React, {useEffect, useState} from 'react';
import {TowerRunwayAssignment} from "@prisma/client";
import {fetchLocalRunwayAssignments} from "@/actions/runwayAssignment";
import {CircularProgress, List} from "@mui/material";
import LocalRunwayAssignmentItem from "@/components/Airport/RunwayAssignment/LocalRunwayAssignmentItem";
import {fetchActiveFlow} from "@/actions/flow";

function LocalRunwayAssignmentList({ icao, localPositions }: { icao: string, localPositions: string[] }) {

    const [assignments, setAssignments] = useState<TowerRunwayAssignment[]>([]);
    const [runways, setRunways] = useState<string[]>([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (!edit) {
            fetchLocalRunwayAssignments(icao).then(setAssignments);
            fetchActiveFlow(icao).then((flow) => {
                const rwys = [
                    ...flow?.departureRunways.map((rwy) => rwy.runwayNumber) || [],
                    ...flow?.arrivalRunways.map((rwy) => rwy.runwayNumber) || [],
                ];
                setRunways(rwys.filter((rwy, idx) => rwys.indexOf(rwy) === idx));
            })
            const assignmentInterval = setInterval(() => {
                fetchLocalRunwayAssignments(icao).then(setAssignments);
            }, 15000);
            return () => clearInterval(assignmentInterval);
        }
    }, [icao, edit]);

    return (
        <List>
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