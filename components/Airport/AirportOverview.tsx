import React from 'react';
import {Grid} from "@mui/material";
import AirportLiveWeather from "@/components/Airport/AirportLiveWeather";
import AirportInformation, {DetailedFlow} from "@/components/Airport/AirportInformation";
import {AirportData} from "@/app/atct/[id]/page";



function AirportOverview({ airportData, condensed = false, }: { airportData: AirportData, condensed?: boolean, }) {

    return (
        <Grid container columns={4} sx={{ border: 1, }}>
            <Grid item xs={4} xl={condensed ? 4 : 2} sx={{ borderRight: { lg: 1, } }}>
                <AirportLiveWeather icao={airportData.icao} atis={airportData.atis} metar={airportData.metar} condensed={condensed} />
            </Grid>
            <Grid item xs={4} xl={condensed ? 4 : 2} sx={{ borderRight: { lg: 1, }, borderTop: condensed ? 1 : 0, }}>
                <AirportInformation icao={airportData.icao} activeFlow={airportData.airport.activeFlow as DetailedFlow} condensed={condensed} />
            </Grid>
        </Grid>
    );
}

export default AirportOverview;