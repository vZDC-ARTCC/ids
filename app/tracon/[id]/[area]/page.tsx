import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Grid} from "@mui/material";
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";
import TraconSplitOverview from "@/components/Split/TraconSplitOverview";
import TraconSectorsList from "@/components/Split/TraconSectorsList";

async function TraconHome({ params }: { params: { id: string, area: string, }}) {

    const { id, area } = params;

    const traconArea = await fetchTraconAreaWithDetail(id, area);

    return (
        <>
            <Grid container columns={3} justifyContent="center" spacing={2}>
                <Grid item xs>
                    { traconArea.parentTracon && <TraconSectorsList tracon={traconArea.parentTracon} allSectors={traconArea.parentTracon.sectors}/> }
                </Grid>
                {traconArea?.majorFields.map((field) => (
                    <Grid key={field.icao} item xs>
                        <AirportOverview icao={field.icao} condensed />
                        <LocalRunwayAssignment icao={field.icao} />
                    </Grid>
                ))}
                <Grid item xs={3}>
                    <BroadcastPirepGrid horizontal />
                </Grid>
            </Grid>
            <Grid container columns={3} spacing={2}>
                {traconArea?.minorFields.map((field) => (
                    <Grid key={field.icao} item xs>
                        <AirportOverview icao={field.icao} condensed />
                    </Grid>
                ))}
            </Grid>
        </>

    );
}

export default TraconHome;