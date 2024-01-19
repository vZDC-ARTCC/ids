import React from 'react';
import {Grid} from "@mui/material";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import {fetchAllAirports} from "@/actions/airport";
import AirportTable from "@/components/Table/AirportTable";
import {fetchEnroute} from "@/actions/enroute";
import EnrouteSectorsList from "@/components/Enroute/EnrouteSectorsList";
import {sortPriorityAirports} from "@/lib/enroute";

async function EridsPage() {

    const airports = await fetchAllAirports();
    const enroute = await fetchEnroute(false, true, false, true);
    return enroute && (
        <Grid container columns={4}>
            <Grid item xs={4} lg={1}>
                <BroadcastPirepGrid />
            </Grid>
            <Grid item xs={4} lg={1} sx={{ border: 1, }}>
                <AirportTable airports={sortPriorityAirports(airports, enroute.priorityAirports)} />
            </Grid>
            <Grid item xs={4} lg>
                <EnrouteSectorsList allSectors={enroute.sectors} />
            </Grid>
        </Grid>
    );
}

export default EridsPage;