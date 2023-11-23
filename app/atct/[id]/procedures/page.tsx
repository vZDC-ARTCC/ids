import React from 'react';
import ChartsTab from "@/components/Tabs/ChartsTab";
import {fetchAirport} from "@/actions/airport";

async function ProceduresPage({ params }: { params: { id: string,}, }) {

    const { id } = params;

    const airport = await fetchAirport(id);

    return airport && (
        <ChartsTab icao={airport.icao} />
    );
}

export default ProceduresPage;