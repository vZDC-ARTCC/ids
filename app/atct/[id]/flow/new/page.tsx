import React from 'react';
import FlowAttributesForm from "@/components/Flow/FlowAttributesForm";
import {fetchAvailableRunways} from "@/actions/runway";
import {Typography} from "@mui/material";

async function NewFlowPage({ params }: { params: { id: string, } }) {
    const { id } = params;

    const runways = await fetchAvailableRunways(id);

    if (!runways) return <Typography>Not found.</Typography>

    return runways && (
        <>
            <Typography variant="h3" textAlign="center" sx={{ marginBottom: '1rem', }}>New Flow</Typography>
            <FlowAttributesForm icao={id} runways={runways?.runways || []} />
        </>
    );
}

export default NewFlowPage;