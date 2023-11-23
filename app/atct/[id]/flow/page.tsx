import React from 'react';
import FlowSelectForm from "@/components/Flow/FlowSelectForm";
import {fetchFlows} from "@/actions/flow";

async function FlowPage({ params }: { params: { id: string, }, }) {

    const { id } = params;

    const flows = await fetchFlows(id);

    return <FlowSelectForm icao={id} flows={flows} />
}

export default FlowPage;