import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Divider, Grid, Stack, Typography} from "@mui/material";
import {AirspaceData} from "@prisma/client";
import AirspaceSelect from "@/components/TraconSelect/AirspaceSelect";
import AirspaceGridItem from "@/components/Airspace/AirspaceGridItem";

async function AirspacePage({ params, searchParams }: { params: { id: string, area: string, }, searchParams: { sectorId?: string, }, }) {
    const { id, area } = params;
    const traconArea = await fetchTraconAreaWithDetail(id, area);
    if (!traconArea) {
        return <Typography>TRACON not found</Typography>
    }
    const sectors = traconArea.parentTracon?.sectors || [];
    const selectedSector = sectors.find((s) => s.id === searchParams.sectorId);

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography variant="h5">Select a sector from the list.</Typography>
            <AirspaceSelect initialSelectedSector={selectedSector} sectors={sectors} />
            <Grid container spacing={2} columns={2}>
                { selectedSector && selectedSector.airspaceData.map((data: AirspaceData) => (
                    <AirspaceGridItem key={data.id} data={data} />
                ))}
            </Grid>
            <Divider />
            <Grid container columns={1}>
                { traconArea && traconArea.areaMap.map((data: AirspaceData, i) => (
                    <AirspaceGridItem key={traconArea.faaIdentifier+i} data={data} />
                ))}
            </Grid>
        </Stack>
    );
}

export default AirspacePage;