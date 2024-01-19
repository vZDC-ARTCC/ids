import React from 'react';
import {Grid, Typography} from "@mui/material";
import {EnrouteSector, EnrouteSectorAssignment, TraconSector, TraconSectorAssignment} from "@prisma/client";

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
function ConsolidationMatrix({ allSectors, assignments }: { allSectors: EnrouteSector[] | TraconSector[], assignments: EnrouteSectorAssignment[] | TraconSectorAssignment[]}) {

    let colorsUsed = 0;

    const sectors: {
        name: string,
        status: string,
        color: string,
        position: number,
    }[] = []

    assignments.forEach((a: any) => {
        if (a.childSectors.length === 0) return;
        const sector = a.parentSector;
        if (!sectors.map((s) => s.name).includes(sector.name)) {
            sectors.push({
                name: sector.name,
                status: 'OPEN',
                color: 'limegreen',
                position: 0,
            });
        }
        colorsUsed = colorsUsed > accentColors.length ? 0 : colorsUsed + 1;
        sectors.push(...a.childSectors.filter((sf: TraconSectorAssignment | any) => {
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
    );
}

export default ConsolidationMatrix;