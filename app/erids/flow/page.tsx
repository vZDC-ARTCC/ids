import React from 'react';
import FlowSelectForm from "@/components/Flow/FlowSelectForm";
import {AirportFlow} from "@prisma/client";
import {Stack, Typography} from "@mui/material";
import AirportSelect from "@/components/Select/AirportSelect";
import {fetchEnroute} from "@/actions/enroute";
import {fetchAllAirports} from "@/actions/airport";
import {sortPriorityAirports} from "@/lib/enroute";

async function FlowPage({ searchParams, }: { searchParams: { icao?: string, }, }) {

    const enroute = await fetchEnroute(false, false, false, true);
    if (!enroute) {
        return <Typography>Enroute not found</Typography>
    }
    const airports = sortPriorityAirports(await fetchAllAirports(true), enroute.priorityAirports);
    const flows: {
      icao: string,
      flows: AirportFlow | any,
    }[] = [
        ...airports.map((f: any) => ({ icao: f.icao, flows: f.flows })),
    ];
    const selectedAirportIcao = searchParams.icao;

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography>Select an airport from the list.</Typography>
            <AirportSelect initialSelectedIcao={selectedAirportIcao} airportIcaos={flows.map((f) => f.icao)} />
            { selectedAirportIcao && <FlowSelectForm icao={selectedAirportIcao} redirectUri={`/erids`} flows={flows.find((f) => f.icao === selectedAirportIcao)?.flows} /> }
        </Stack>
    );
}

export default FlowPage;