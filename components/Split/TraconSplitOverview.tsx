import React from 'react';
import {Tracon, TraconSector} from "@prisma/client";
import {Box, Typography} from "@mui/material";
import TraconSectorAssignmentList from "@/components/Split/TraconSectorAssignmentList";

function TraconSplitOverview({ tracon }: { tracon: Tracon | any, }) {

    return (
        <Box sx={{ padding: 1, border: 1, }}>
            <Typography variant="h6">{tracon.faaIdentifier} SECTOR ASSIGNMENTS</Typography>
            <TraconSectorAssignmentList faaIdentifier={tracon.faaIdentifier} sectors={tracon.sectors
                .sort((a: TraconSector, b: TraconSector) => a.name.localeCompare(b.name))} />
        </Box>
    );
}

export default TraconSplitOverview;