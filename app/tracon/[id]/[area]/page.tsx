import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Box, Grid, Typography} from "@mui/material";
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";
import TraconSectorsList from "@/components/Tracon/TraconSectorsList";
import AirportTable from "@/components/Table/AirportTable";

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
                    {traconArea?.majorFields.map((field) => (
                        <Grid key={field.icao} item xs>
                            <AirportOverview icao={field.icao} condensed />
                            <LocalRunwayAssignment icao={field.icao} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Grid container columns={3} spacing={2}>
                {traconArea?.minorFields.map((field) => (
                    <Grid key={field.icao} item xs>
                        <AirportOverview icao={field.icao} condensed />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default TraconHome;