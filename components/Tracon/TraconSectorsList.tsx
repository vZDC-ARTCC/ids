"use client";
import React from 'react';
import {Stack, Typography} from "@mui/material";
import ConsolidationMatrix from "@/components/Matrix/ConsolidationMatrix";
import {TraconAreaData} from "@/app/tracon/[id]/[area]/page";

function TraconSectorsList({ traconAreaData, }: { traconAreaData: TraconAreaData, }) {

    return (
        <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6">{traconAreaData.id} SECTOR DISPLAY</Typography>
            </Stack>
            <ConsolidationMatrix allSectors={traconAreaData.traconArea.parentTracon?.sectors || []} assignments={traconAreaData.splits || []} />
        </Stack>
    );
}

export default TraconSectorsList;