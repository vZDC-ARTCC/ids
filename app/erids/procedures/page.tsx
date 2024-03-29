import React from 'react';
import {Stack, Typography} from "@mui/material";
import ChartsTab from "@/components/Tabs/ChartsTab";
import AirportSelect from "@/components/Select/AirportSelect";
import {fetchEnroute} from "@/actions/enroute";
import {fetchAllAirports} from "@/actions/airport";

async function TraconProceduresPage({ searchParams, }: { searchParams: { icao?: string, }, }) {

    const enroute = await fetchEnroute(false, false, false, true);
    if (!enroute) {
        return <Typography>Enroute not found</Typography>
    }
    const priorityIcaos: string[] = enroute.priorityAirports.map((pa) => pa.icao);
    const allAirports = await fetchAllAirports(false);
    const priorityAirports = allAirports.filter((a) => priorityIcaos.includes(a.icao));
    const nonPriorityAirports = allAirports.filter((a) => !priorityIcaos.includes(a.icao));
    const airports = [...priorityAirports, ...nonPriorityAirports];
    
    const selectedAirportIcao = searchParams.icao;

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography>Select an airport from the list.</Typography>
            <AirportSelect initialSelectedIcao={selectedAirportIcao} airportIcaos={airports.map((a) => a.icao)} />
            { selectedAirportIcao && <ChartsTab icao={selectedAirportIcao} /> }
        </Stack>
    );
}

export default TraconProceduresPage;