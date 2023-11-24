import React from 'react';
import PreferredRouteTab from "@/components/Tabs/PreferredRouteTab";
import {fetchAirport} from "@/actions/airport";

async function PreferredRoutesPage({ params }: { params: { id: string, }, }) {

    const { id } = params;

    const airport = await fetchAirport(id);

    return airport && <PreferredRouteTab defaultOriginAirport={airport.faaIdentifier} />
}

export default PreferredRoutesPage;