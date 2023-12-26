import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Box, Stack, Typography} from "@mui/material";
import {AirspaceData} from "@prisma/client";
import Image from "next/image";
import TraconAirspaceSelect from "@/components/TraconSelect/TraconAirspaceSelect";

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
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                { traconArea && traconArea.areaMap.map((data: AirspaceData) => (
                    <Box key={data.id}>
                        <Typography variant="h3" textAlign="center">{data.name}</Typography>
                        <Image src={data.imageUrl} alt="Sector Map" width={800} height={700} />
                    </Box>
                ))}
            </Stack>
            <Typography variant="h5">Select a sector from the list.</Typography>
            <TraconAirspaceSelect initialSelectedSector={selectedSector} sectors={sectors} />
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                { selectedSector && selectedSector.airspaceData.map((data: AirspaceData) => (
                    <Box key={data.id}>
                        <Typography variant="h3" textAlign="center">{data.name}</Typography>
                        <Image src={data.imageUrl} alt="Sector Map" width={700} height={700} />
                    </Box>
                ))}
            </Stack>

        </Stack>
    );
}

export default AirspacePage;