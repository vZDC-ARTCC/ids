import React from 'react';
import {Grid} from "@mui/material";
import TraconSplitOverview from "@/components/Tracon/TraconSplitOverview";
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import TraconSectorsList from "@/components/Tracon/TraconSectorsList";

async function TraconSplitPage({ params }: { params: { id: string, area: string, }, }) {

    const { id, area } = params;
    const traconArea = await fetchTraconAreaWithDetail(id, area);

    return traconArea.parentTracon && (
        <Grid container columns={2} spacing={2}>
            <Grid item xs={2} md={1}>
                <TraconSplitOverview tracon={traconArea.parentTracon} />
            </Grid>
            <Grid item xs={2} md={1}>
                <TraconSectorsList tracon={traconArea.parentTracon} allSectors={traconArea.parentTracon?.sectors || []} />
            </Grid>
        </Grid>
    );
}

export default TraconSplitPage;