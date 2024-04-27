import React from 'react';
import {EnrouteSector} from "@prisma/client";
import {Box, Typography} from "@mui/material";
import EnrouteSectorAssignmentList from './EnrouteSectorAssignmentList';
import {EnrouteData} from "@/app/erids/page";

async function EnrouteSplitOverview({ enrouteData, }: { enrouteData: EnrouteData, }) {

    return enrouteData.enroute?.sectors && (
        <Box sx={{ padding: 1, border: 1, }}>
            <Typography variant="h6">ENROUTE SECTOR ASSIGNMENTS</Typography>
            <EnrouteSectorAssignmentList sectorAssignments={enrouteData.splits} presets={enrouteData.enroute.presets} sectors={enrouteData.enroute.sectors
                .sort((a: EnrouteSector, b: EnrouteSector) => a.name.localeCompare(b.name))} />
        </Box>
    );
}

export default EnrouteSplitOverview;