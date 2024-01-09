import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Stack, Typography} from "@mui/material";
import ChartsTab from "@/components/Tabs/ChartsTab";
import AirportSelect from "@/components/Select/AirportSelect";

async function TraconProceduresPage({ params, searchParams, }: { params: { id: string, area: string, }, searchParams: { icao?: string, }, }) {
    const { id, area } = params;
    const traconArea = await fetchTraconAreaWithDetail(id, area);
    if (!traconArea) {
        return <Typography>TRACON not found</Typography>
    }
    const icaos: string[] = [
        ...traconArea.majorFields.map((f) => f.icao),
        ...traconArea.minorFields.map((f) => f.icao),
    ];
    const selectedAirportIcao = searchParams.icao;

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography>Select an airport from the list.</Typography>
            <AirportSelect initialSelectedIcao={selectedAirportIcao} airportIcaos={icaos} />
            { selectedAirportIcao && <ChartsTab icao={selectedAirportIcao} /> }
        </Stack>
    );
}

export default TraconProceduresPage;