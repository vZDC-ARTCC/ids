import React from 'react';
import {fetchAirport} from "@/actions/airport";
import {AirspaceData} from "@prisma/client";
import AirspaceGridItem from "@/components/Airspace/AirspaceGridItem";
import {Grid} from "@mui/material";

async function AtctAirspacePage({ params }: { params: { id: string, }, }) {

    const { id } = params;
    const airport = await fetchAirport(id);

    return airport && (
        <Grid container columns={2}>
            { airport.airspaceData.map((data: AirspaceData, i) => (
                <AirspaceGridItem key={i} data={data} />
            ))}
        </Grid>
    );
}

export default AtctAirspacePage;