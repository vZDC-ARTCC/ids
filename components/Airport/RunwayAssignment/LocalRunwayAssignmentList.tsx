"use client";
import React from 'react';
import {TowerRunwayAssignment} from "@prisma/client";
import {List, Typography} from "@mui/material";
import LocalRunwayAssignmentItem from "@/components/Airport/RunwayAssignment/LocalRunwayAssignmentItem";

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