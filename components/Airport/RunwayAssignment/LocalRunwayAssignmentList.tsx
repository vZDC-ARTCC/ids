"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Runway, TowerRunwayAssignment} from "@prisma/client";
import {fetchLocalRunwayAssignments} from "@/actions/runwayAssignment";
import {CircularProgress, List, Typography} from "@mui/material";
import LocalRunwayAssignmentItem from "@/components/Airport/RunwayAssignment/LocalRunwayAssignmentItem";
import {fetchActiveFlow} from "@/actions/flow";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";

function LocalRunwayAssignmentList({ icao, assignments, runways, localPositions }: { icao: string, assignments: TowerRunwayAssignment[], runways: string[], localPositions: string[] }) {

    if (runways.length === 0 ) {
        return <Typography variant="h5" color="red">No active flow has been selected.</Typography>
    }
    return runways.length > 0 && (
        <List>
            {localPositions.map((local) => {
                const assignment = assignments.find((a) => a.localIdentifier === local);
                return (
                    <LocalRunwayAssignmentItem
                        key={local}
                        icao={icao}
                        id={assignment?.id}
                        availableRunways={runways}
                        position={local}
                        runways={assignment?.runwayIdentifiers || []}
                    />
                );
            })}
        </List>
    );
}

export default LocalRunwayAssignmentList;