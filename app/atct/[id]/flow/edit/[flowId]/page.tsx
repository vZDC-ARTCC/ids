import React from 'react';
import {Typography} from "@mui/material";
import FlowAttributesForm from "@/components/Flow/FlowAttributesForm";
import {Runway} from "@prisma/client";
import {AvailableRunway, CustomizableOption} from "@/types";
import {fetchFlow} from "@/actions/flow";
import {fetchAvailableRunways} from "@/actions/runway";

async function FlowEditPage({ params }: { params: { id: string, flowId: string, } }) {
    
    const { id, flowId } = params;
    const flow = await fetchFlow(id, flowId);
    const runways = await fetchAvailableRunways(id);

    if (!flow || !runways) return <Typography>Not found.</Typography>

    return flow && (
            <>
                <Typography variant="h3" textAlign="center" sx={{ marginBottom: '1rem', }}>Edit {flow.name}</Typography>
                <FlowAttributesForm icao={id} runways={runways?.runways || []} presetFlowConfig={flow} />
            </>
        );

}

export default FlowEditPage;