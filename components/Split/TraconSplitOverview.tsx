import React from 'react';
import {Tracon} from "@prisma/client";
import {Box, Typography} from "@mui/material";
import TraconSectorAssignmentList from "@/components/Split/TraconSectorAssignmentList";

function TraconSplitOverview({ tracon }: { tracon: Tracon | any, }) {

    return (
        <Box sx={{ padding: 1, border: 1, }}>
            <Typography variant="h6">{tracon.faaIdentifier} SECTOR ASSIGNMENTS</Typography>
            <Typography sx={{ textDecoration: 'underline', }}>Any sector not explicitly consolidated below is assumed to be open.</Typography>
            <TraconSectorAssignmentList faaIdentifier={tracon.faaIdentifier} sectors={tracon.sectors} />
        </Box>
    );
}

export default TraconSplitOverview;