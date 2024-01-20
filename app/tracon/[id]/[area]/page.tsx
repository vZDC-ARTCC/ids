import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Box, Grid, Typography} from "@mui/material";
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";
import TraconSectorsList from "@/components/Tracon/TraconSectorsList";
import AirportTable from "@/components/Table/AirportTable";
import TraconAirportView from "@/components/Airport/TraconAirportView";

async function TraconHome({ params }: { params: { id: string, area: string, }}) {

    const { id, area } = params;

    const traconArea = await fetchTraconAreaWithDetail(id, area);

    return traconArea && traconArea.parentTracon && (
        <div>
            <Box>
                <TraconSectorsList tracon={traconArea.parentTracon} allSectors={traconArea.parentTracon.sectors} />
                <Grid container columns={10}>
                    <Grid xs={10} md={5} xl={3}>
                        <BroadcastPirepGrid />
                    </Grid>
                    <Grid item xs={10} md={5} xl={2} sx={{ border: 1, }}>
                        <Typography variant="h6" sx={{ padding: 1, }}>SATELLITE FIELDS</Typography>
                        <AirportTable airports={traconArea?.minorFields} />
                    </Grid>
                    <TraconAirportView airports={traconArea?.majorFields || []} />
                </Grid>
            </Box>
        </div>
    );
}

export default TraconHome;