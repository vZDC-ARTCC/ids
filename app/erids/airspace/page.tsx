import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Divider, Grid, Stack, Typography} from "@mui/material";
import {AirspaceData} from "@prisma/client";
import AirspaceSelect from "@/components/TraconSelect/AirspaceSelect";
import AirspaceGridItem from "@/components/Airspace/AirspaceGridItem";
import {fetchEnroute} from "@/actions/enroute";

async function AirspacePage({ searchParams }: { searchParams: { sectorId?: string, }, }) {
    const enroute = await fetchEnroute(false,  true, true, false);
    if (!enroute) {
        return <Typography>Enroute not found</Typography>
    }
    const sectors = enroute.sectors || [];
    const selectedSector = sectors.find((s) => s.id === searchParams.sectorId);

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography variant="h5">Select a sector from the list.</Typography>
            <AirspaceSelect initialSelectedSector={selectedSector} sectors={sectors} />
            <Grid container spacing={2} columns={3}>
                { selectedSector && selectedSector.airspace.map((data: AirspaceData) => (
                    <AirspaceGridItem key={data.id} data={data} />
                ))}
            </Grid>
            <Divider />
            <Grid container columns={2}>
                { enroute && enroute.airspace.map((data: AirspaceData, i) => (
                    <AirspaceGridItem key={enroute.id+i} data={data} />
                ))}
            </Grid>
        </Stack>
    );
}

export default AirspacePage;