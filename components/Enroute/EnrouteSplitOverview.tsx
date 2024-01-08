import React from 'react';
import {EnrouteSector} from "@prisma/client";
import {Box, Typography} from "@mui/material";
import EnrouteSectorAssignmentList from './EnrouteSectorAssignmentList';
import {fetchEnroute} from "@/actions/enroute";

async function EnrouteSplitOverview() {

    const enroute = await fetchEnroute(false, true);

    return enroute?.sectors && (
        <Box sx={{ padding: 1, border: 1, }}>
            <Typography variant="h6">ENROUTE SECTOR ASSIGNMENTS</Typography>
            <EnrouteSectorAssignmentList sectors={enroute.sectors
                .sort((a: EnrouteSector, b: EnrouteSector) => a.name.localeCompare(b.name))} />
        </Box>
    );
}

export default EnrouteSplitOverview;