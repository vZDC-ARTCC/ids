"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {EnrouteSector} from "@prisma/client";
import {CircularProgress, Stack, Typography} from "@mui/material";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {fetchEnrouteAssignments} from "@/actions/enrouteAssignment";
import ConsolidationMatrix from "@/components/Matrix/ConsolidationMatrix";

function EnrouteSectorsList({ allSectors }: { allSectors: EnrouteSector[], }) {

    const [splits, setSplits] = useState<any[]>();
    const [sectorsChanged, setSectorsChanged] = useState(false);
    const [first, setFirst] = useState(true);

    const updateEnrouteAssignments = useCallback(() => {
        fetchEnrouteAssignments().then((newEnrouteAssignments) => {
            setSplits((prev) => {
                if (!first && (
                    newEnrouteAssignments.length !== prev?.length ||
                    !newEnrouteAssignments.every((ta: any, i) =>
                        ta.parentSectorId === prev[i].parentSectorId &&
                        ta.childSectors.map((cs: EnrouteSector) => cs.id).every((s: string, idx: number) => s === prev[i].childSectors[idx].id)
                    ))) {
                    setSectorsChanged(true);
                }
                return newEnrouteAssignments;
            })
        });
    }, [first]);
    
    useEffect(() => {
        updateEnrouteAssignments();
        setFirst(false);
        const interval = setInterval(() => {
            updateEnrouteAssignments()
        }, 15000);
        return () => clearInterval(interval);
    }, [updateEnrouteAssignments]);

    return (
        <>
            <ChangeSnackbar open={sectorsChanged} change={{ message: `ENROUTE CHANGES`, type: 'tracon_sectors', }} onAcknowledge={setSectorsChanged} />
            <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">ENROUTE SECTOR DISPLAY</Typography>
                    {!splits && <CircularProgress />}
                </Stack>
                <ConsolidationMatrix allSectors={allSectors} assignments={splits || []} />
            </Stack>
        </>


    );
}

export default EnrouteSectorsList;