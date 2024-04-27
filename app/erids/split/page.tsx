import React from 'react';
import {Grid} from "@mui/material";
import EnrouteSplitOverview from "@/components/Enroute/EnrouteSplitOverview";
import EnrouteSectorsList from "@/components/Enroute/EnrouteSectorsList";
import {fetchEnrouteData} from "@/actions/enroute";

async function TraconSplitPage() {

    const enrouteData = await fetchEnrouteData();

    return enrouteData && (
        <Grid container columns={2} spacing={2}>
            <Grid item xs={2} md={1}>
                <EnrouteSplitOverview enrouteData={enrouteData} />
            </Grid>
            <Grid item xs={2} md={1}>
                <EnrouteSectorsList enrouteData={enrouteData} />
            </Grid>
        </Grid>
    );
}

export default TraconSplitPage;