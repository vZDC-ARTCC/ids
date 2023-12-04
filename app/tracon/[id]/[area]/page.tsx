import React from 'react';
import {fetchTraconArea} from "@/actions/traconArea";
import {Typography} from "@mui/material";

async function TraconHome({ params }: { params: { id: string, area: string, }}) {

    const { id, area } = params;

    const traconArea = await fetchTraconArea(id, area);

    return (
        <Typography>{traconArea?.name}</Typography>
    );
}

export default TraconHome;