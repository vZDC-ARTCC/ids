import React from 'react';
import {Container} from "@mui/material";

function WeatherPage() {

    return (
        <Container maxWidth="xl">

            <embed src="https://www.weather.gov/zdc/" type="application/html"/>
        </Container>
        
    );
}

export default WeatherPage;