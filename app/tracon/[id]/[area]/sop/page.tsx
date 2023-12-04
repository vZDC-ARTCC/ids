import React from 'react';
import SopTab from "@/components/Sop/SopTab";
import {fetchTraconArea} from "@/actions/traconArea";

async function SopPage({ params }: { params: { id: string, area: string, } }) {

    const { id, area } = params;

    const traconArea = await fetchTraconArea(id, area);

    return traconArea && <SopTab sopLink={traconArea.sopLink} />
}

export default SopPage;