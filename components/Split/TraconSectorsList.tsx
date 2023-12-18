import React from 'react';
import {fetchTraconAssignments} from "@/actions/traconAssignment";
import {Tracon, TraconSector} from "@prisma/client";
import {Grid, Stack, Typography} from "@mui/material";
import RefreshButton from "@/components/Utils/RefreshButton";

async function TraconSectorsList({ tracon, allSectors }: { tracon: Tracon | null, allSectors: TraconSector[], }) {

    if (!tracon) {
        return;
    }
    const splits = await fetchTraconAssignments(tracon.faaIdentifier);

    const sectors: {
        name: string,
        status: string,
        color: string,
        position: number,
    }[] = []

    splits.forEach((sp) => {
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

        sectors.push(...sp.childSectors.filter((sf) => {
            return !sectors.map((s) => s.name).includes(sf.name)
        }).map((cs) => {
            return {
                name: cs.name,
                status: `> ${sector.name}`,
                color: 'gold',
                position: 1,
            }
        }));
    });

    allSectors.forEach((as) => {
        if (!sectors.map((s) => s.name).includes(as.name)) {
            sectors.push({
                name: as.name,
                status: 'CLOSED',
                color: 'red',
                position: 2,
            });
        }
    });



    return (
        <Stack direction="column" spacing={2} sx={{ border: 1, padding: 1, }}>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h6">{tracon.faaIdentifier} SECTOR DISPLAY</Typography>
                <RefreshButton />
            </Stack>
            <Grid container>
                {sectors
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .sort((a, b) => a.position.toString().localeCompare(b.position.toString()))
                    .map((s) => (
                        <Grid item key={s.name} xs sx={{ border: 1, padding: 1, }}>
                            <Typography variant="h5" sx={{ width: 100 }}>{s.name}</Typography>
                            <Typography color={s.color} fontWeight={700} variant="subtitle1">{s.status}</Typography>
                        </Grid>
                ))}
            </Grid>
        </Stack>

    );
}

export default TraconSectorsList;