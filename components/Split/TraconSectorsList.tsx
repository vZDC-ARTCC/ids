"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {fetchTraconAssignments} from "@/actions/traconAssignment";
import {Prisma, Tracon, TraconSector, TraconSectorAssignment} from "@prisma/client";
import {CircularProgress, Grid, Stack, Typography} from "@mui/material";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";


const accentColors = [
    "#99627A",
    "#468B97",
    "#EF6262",
    "#F3AA60",
    "#8C56B7",
    "#5EA995",
    "#D54B6B",
    "#6DA0D0",
    "#A03D80",
    "#4BA97F"
];


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

    let colorsUsed = 0;
    
    const sectors: {
        name: string,
        status: string,
        color: string,
        position: number,
    }[] = []

    splits?.forEach((sp: TraconSectorAssignment | any) => {
        if (sp.childSectors.length === 0) return;
        const sector = sp.parentSector;
        if (!sectors.map((s) => s.name).includes(sector.name)) {
            sectors.push({
                name: sector.name,
                status: 'OPEN',
                color: 'limegreen',
                position: 0,
            });
        }
        colorsUsed = colorsUsed > accentColors.length ? 0 : colorsUsed + 1;
        sectors.push(...sp.childSectors.filter((sf: TraconSectorAssignment | any) => {
            return !sectors.map((s) => s.name).includes(sf.name)
        }).map((cs: TraconSectorAssignment | any) => {

            return {
                name: cs.name,
                status: `> ${sector.name}`,
                color: accentColors[colorsUsed - 1],
                position: 1,
            }
        }));
    });

    allSectors.forEach((as) => {
        if (!sectors.map((s) => s.name).includes(as.name)) {
            sectors.push({
                name: as.name,
                status: 'CLOSED',
                color: 'darkgray',
                position: 2,
            });
        }
    });

    return (
        <>
            <ChangeSnackbar open={sectorsChanged} change={{ message: `${tracon.faaIdentifier} CHANGES`, type: 'tracon_sectors', }} onAcknowledge={setSectorsChanged} />
            <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">{tracon.faaIdentifier} SECTOR DISPLAY</Typography>
                    {!splits && <CircularProgress />}
                </Stack>
                <Grid container>
                    {sectors
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .sort((a, b) => a.position.toString().localeCompare(b.position.toString()))
                        .map((s) => (
                            <Grid item key={s.name} xs sx={{ border: 1, padding: 1, }}>
                                <Typography variant="h6" sx={{ width: 100 }}>{s.name}</Typography>
                                <Typography color={s.color} fontWeight={700} variant={s.position === 0 ? 'h3' : 'h5'}>{s.status}</Typography>
                            </Grid>
                        ))}
                </Grid>
            </Stack>
        </>


    );
}

export default TraconSectorsList;