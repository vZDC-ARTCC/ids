"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {EnrouteSector} from "@prisma/client";
import {CircularProgress, Stack, Typography} from "@mui/material";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {fetchEnrouteAssignments} from "@/actions/enrouteAssignment";
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