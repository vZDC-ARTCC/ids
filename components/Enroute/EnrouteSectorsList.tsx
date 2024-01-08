"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {EnrouteSector, EnrouteSectorAssignment} from "@prisma/client";
import {CircularProgress, Grid, Stack, Typography} from "@mui/material";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {fetchEnrouteAssignments} from "@/actions/enrouteAssignment";


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

    let colorsUsed = 0;
    
    const sectors: {
        name: string,
        status: string,
        color: string,
        position: number,
    }[] = []

    splits?.forEach((sp: EnrouteSectorAssignment | any) => {
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
        sectors.push(...sp.childSectors.filter((sf: EnrouteSectorAssignment | any) => {
            return !sectors.map((s) => s.name).includes(sf.name)
        }).map((cs: EnrouteSectorAssignment | any) => {

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
            <ChangeSnackbar open={sectorsChanged} change={{ message: `ENROUTE CHANGES`, type: 'tracon_sectors', }} onAcknowledge={setSectorsChanged} />
            <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h6">ENROUTE SECTOR DISPLAY</Typography>
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

export default EnrouteSectorsList;