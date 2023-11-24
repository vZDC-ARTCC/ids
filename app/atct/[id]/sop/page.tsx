import React from 'react';
import {fetchAirport} from "@/actions/airport";
import SopTab from "@/components/Sop/SopTab";

async function SopPage({ params }: { params: { id: string, } }) {

    const { id } = params;

    const airport = await fetchAirport(id);

    return airport && <SopTab sopLink={airport.sopLink} />
}

export default SopPage;