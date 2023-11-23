import React from 'react';
import IdsTab from "@/components/Tabs/IdsTab";
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import {Container, Grid} from "@mui/material";
import DepartureGatesInformation from "@/components/Airport/DepartureGates/DepartureGatesInformation";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";

async function AtctHome({ params }: { params: { id: string, }, }) {

    const { id } = params;

    return (
        <IdsTab>
            <Container maxWidth="xl">
                <div>
                    <AirportOverview icao={id} />
                </div>
                <Grid container columns={2}>
                    <Grid item xs={2} lg={1}>
                        <BroadcastPirepGrid />
                    </Grid>
                    <Grid item xs={2} lg={1}>
                        <div>
                            <DepartureGatesInformation icao={id} />
                            <LocalRunwayAssignment icao={id} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </IdsTab>
    );
}

export default AtctHome;