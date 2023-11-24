import React from 'react';
import {Stack} from "@mui/material";
import Image from "next/image";

function RadarPage() {
    return (
        <>
            <Stack direction="row" flexWrap="wrap" justifyContent="center">
                <Image style={{ padding: '1rem', }} src="https://radar.weather.gov/ridge/standard/NORTHEAST_loop.gif" alt="Radar" width={600} height={600} />
                <Image style={{ padding: '1rem', }} src="https://radar.weather.gov/ridge/standard/SOUTHEAST_loop.gif" alt="Radar" width={600} height={600} />
                <Image style={{ padding: '1rem', }} src="https://radar.weather.gov/ridge/standard/CONUS_loop.gif" alt="Radar" width={900} height={600} />
            </Stack>
        </>

    );
}

export default RadarPage;