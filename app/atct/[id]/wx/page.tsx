import React from 'react';
import {Container} from "@mui/material";

function WeatherPage({ params }: { params: { id: string, }, }) {

    return (
        <Container maxWidth="xl">

            <embed src="https://www.weather.gov/zdc/" type="application/html"/>
        </Container>
        
    );
}

export default WeatherPage;