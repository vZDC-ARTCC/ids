"use client";
import React from 'react';
import {Stack, Typography} from "@mui/material";
import ConsolidationMatrix from "@/components/Matrix/ConsolidationMatrix";
import {EnrouteData} from "@/app/erids/page";

function EnrouteSectorsList({ enrouteData, }: { enrouteData: EnrouteData, }) {

    return (
        <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6">ENROUTE SECTOR DISPLAY</Typography>
            </Stack>
            <ConsolidationMatrix allSectors={enrouteData.enroute.sectors} assignments={enrouteData.splits || []} />
        </Stack>

    );
}

export default EnrouteSectorsList;