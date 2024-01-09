"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {fetchTraconAssignments} from "@/actions/traconAssignment";
import {Tracon, TraconSector} from "@prisma/client";
import {CircularProgress, Stack, Typography} from "@mui/material";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import ConsolidationMatrix from "@/components/Matrix/ConsolidationMatrix";

function TraconSectorsList({ tracon, allSectors }: { tracon: Tracon, allSectors: TraconSector[], }) {

    const [splits, setSplits] = useState<any[]>();
    const [sectorsChanged, setSectorsChanged] = useState(false);
    const [first, setFirst] = useState(true);

    const updateTraconAssignments = useCallback(() => {
        fetchTraconAssignments(tracon.faaIdentifier).then((newTraconAssignments) => {
            setSplits((prev) => {
                if (!first && (
                    newTraconAssignments.length !== prev?.length ||
                    !newTraconAssignments.every((ta: any, i) =>
                        ta.parentSectorId === prev[i].parentSectorId &&
                        ta.childSectors.map((cs: TraconSector) => cs.id).every((s: string, idx: number) => s === prev[i].childSectors[idx].id)
                    ))) {
                    setSectorsChanged(true);
                }
                return newTraconAssignments;
            })
        });
    }, [first, tracon.faaIdentifier]);
    
    useEffect(() => {
        updateTraconAssignments();
        setFirst(false);
        const interval = setInterval(() => {
            updateTraconAssignments()
        }, 15000);
        return () => clearInterval(interval);
    }, [updateTraconAssignments]);

    return (
        <>
            <ChangeSnackbar open={sectorsChanged} change={{ message: `${tracon.faaIdentifier} CHANGES`, type: 'tracon_sectors', }} onAcknowledge={setSectorsChanged} />
            <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">{tracon.faaIdentifier} SECTOR DISPLAY</Typography>
                    {!splits && <CircularProgress />}
                </Stack>
                <ConsolidationMatrix allSectors={allSectors} assignments={splits || []} />
            </Stack>
        </>


    );
}

export default TraconSectorsList;