import React from 'react';
import FlowSelectForm from "@/components/Flow/FlowSelectForm";
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {AirportFlow} from "@prisma/client";
import {Stack, Typography} from "@mui/material";
import TraconAirportSelect from "@/components/TraconSelect/TraconAirportSelect";

async function FlowPage({ params, searchParams, }: { params: { id: string, area: string, }, searchParams: { icao?: string, }, }) {

    const { id, area } = params;
    const traconArea = await fetchTraconAreaWithDetail(id, area);
    if (!traconArea) {
        return <Typography>TRACON not found</Typography>
    }
    const flows: {
      icao: string,
      flows: AirportFlow | any,
    }[] = [
        ...traconArea.majorFields.map((f) => ({ icao: f.icao, flows: f.flows })),
        ...traconArea.minorFields.map((f) => ({ icao: f.icao, flows: f.flows })),
    ];
    const selectedAirportIcao = searchParams.icao;

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography>Select an airport from the list.</Typography>
            <TraconAirportSelect initialSelectedIcao={selectedAirportIcao} airportIcaos={flows.map((f) => f.icao)} />
            { selectedAirportIcao && <FlowSelectForm icao={selectedAirportIcao} redirectUri={`/tracon/${id}/${area}/`} flows={flows.find((f) => f.icao === selectedAirportIcao)?.flows} /> }
        </Stack>
    );
}

export default FlowPage;