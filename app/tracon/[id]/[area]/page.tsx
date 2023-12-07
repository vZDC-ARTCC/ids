import React from 'react';
import {fetchTraconArea, fetchTraconAreaWithFields} from "@/actions/traconArea";
import {Box, Grid, Stack, Typography} from "@mui/material";
import AirportInformation from "@/components/Airport/AirportInformation";
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";

async function TraconHome({ params }: { params: { id: string, area: string, }}) {

    const { id, area } = params;

    const traconArea = await fetchTraconAreaWithFields(id, area);

    return (
        <>
            <Grid container columns={5}>
                <Grid item xs={5} lg={2}>
                    <BroadcastPirepGrid />
                </Grid>
                {traconArea?.majorFields.map((field) => (
                    <Grid key={field.icao} item xs={5} lg={3} spacing={3} sx={{ padding: 1, border: 5, }}>
                        <AirportOverview icao={field.icao} condensed />
                        <LocalRunwayAssignment icao={field.icao} />
                    </Grid>
                ))}
            </Grid>
            <Grid container columns={4} spacing={2}>
                {traconArea?.minorFields.map((field) => (
                    <Grid key={field.icao} item xs={4} lg={2} xl={2}>
                        <AirportOverview icao={field.icao} condensed />
                    </Grid>
                ))}
            </Grid>
        </>

    );
}

export default TraconHome;