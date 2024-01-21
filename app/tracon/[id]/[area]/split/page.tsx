import React from 'react';
import {Grid} from "@mui/material";
import TraconSplitOverview from "@/components/Tracon/TraconSplitOverview";
import {fetchTraconData} from "@/actions/traconArea";
import TraconSectorsList from "@/components/Tracon/TraconSectorsList";

async function TraconSplitPage({ params }: { params: { id: string, area: string, }, }) {

    const { id, area } = params;
    const traconAreaData = await fetchTraconData(id, area);

    return traconAreaData.traconArea && (
        <Grid container columns={2} spacing={2}>
            <Grid item xs={2} md={1}>
                <TraconSplitOverview traconAreaData={traconAreaData} />
            </Grid>
            <Grid item xs={2} md={1}>
                <TraconSectorsList traconAreaData={traconAreaData} />
            </Grid>
        </Grid>
    );
}

export default TraconSplitPage;