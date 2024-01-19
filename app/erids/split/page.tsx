import React from 'react';
import {Grid} from "@mui/material";
import EnrouteSplitOverview from "@/components/Enroute/EnrouteSplitOverview";
import EnrouteSectorsList from "@/components/Enroute/EnrouteSectorsList";
import {fetchEnroute} from "@/actions/enroute";

async function TraconSplitPage() {

    const enroute = await fetchEnroute(false, true);

    return enroute && (
        <Grid container columns={2} spacing={2}>
            <Grid item xs={2} md={1}>
                <EnrouteSplitOverview />
            </Grid>
            <Grid item xs={2} md={1}>
                <EnrouteSectorsList allSectors={enroute.sectors} />
            </Grid>
        </Grid>
    );
}

export default TraconSplitPage;