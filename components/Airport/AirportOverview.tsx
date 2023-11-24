import React from 'react';
import {Grid} from "@mui/material";
import AirportLiveWeather from "@/components/Airport/AirportLiveWeather";
import AirportInformation from "@/components/Airport/AirportInformation";

async function AirportOverview({ icao, condensed = false, }: { icao: string, condensed?: boolean, }) {

    return (
        <Grid container columns={4} sx={{ border: 1, }}>
            <Grid item xs={4} xl={2} sx={{ borderRight: { lg: 1, } }}>
                <AirportLiveWeather icao={icao} condensed={condensed} />
            </Grid>
            <Grid item xs={4} xl={2} sx={{ borderRight: { lg: 1, } }}>
                <AirportInformation icao={icao} condensed={condensed} />
            </Grid>
        </Grid>
    );
}

export default AirportOverview;