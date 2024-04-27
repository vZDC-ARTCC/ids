import React from 'react';
import {TraconSector} from "@prisma/client";
import {Box, Typography} from "@mui/material";
import TraconSectorAssignmentList from "@/components/Tracon/TraconSectorAssignmentList";
import {TraconAreaData} from "@/app/tracon/[id]/[area]/page";

function TraconSplitOverview({ traconAreaData, }: { traconAreaData: TraconAreaData, }) {

    return (
        <Box sx={{ padding: 1, border: 1, }}>
            <Typography variant="h6">{traconAreaData.id} SECTOR ASSIGNMENTS</Typography>
            <TraconSectorAssignmentList faaIdentifier={traconAreaData.id} sectorAssignments={traconAreaData.splits} presets={traconAreaData.traconArea.parentTracon?.presets || []} sectors={traconAreaData.traconArea.parentTracon?.sectors
                .sort((a: TraconSector, b: TraconSector) => a.name.localeCompare(b.name)) || []} />
        </Box>
    );
}

export default TraconSplitOverview;