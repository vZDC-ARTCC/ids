"use client";
import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {Broadcast, Pirep} from "@prisma/client";
import {fetchBroadcasts} from "@/actions/broadcast";
import {fetchPireps} from "@/actions/pirep";
import BroadcastList from "@/components/Broadcast/BroadcastList";
import PirepList from "@/components/Pirep/PirepList";

function BroadcastPirepGrid({ horizontal = false }: { horizontal?: boolean, }) {

    const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
    const [pireps, setPireps] = useState<Pirep[]>([]);

    useEffect(() => {
        fetchBroadcasts().then(setBroadcasts);
        fetchPireps().then(setPireps);
        const broadcastPirepInterval = setInterval(() => {
            fetchBroadcasts().then(setBroadcasts);
            fetchPireps().then(setPireps);
        }, 60000);
        return () => clearInterval(broadcastPirepInterval);
    }, []);


    return (
        <Grid container columns={2} sx={{ border: 1, }}>
            <Grid item xs={horizontal ? 1 : 2} sx={{ minHeight: '20rem', padding: 1, borderRight: horizontal ? 1 : 0, }}>
                <Typography variant="h6">BROADCAST</Typography>
                <BroadcastList broadcasts={broadcasts} big={true} />
            </Grid>
            <Grid item xs={horizontal ? 1 : 2} sx={{ borderTop: horizontal ? 0 : 1, minHeight: '30rem', padding: 1, }}>
                <Typography variant="h6">PIREP</Typography>
                <PirepList pireps={pireps} big={true} />
            </Grid>
        </Grid>

    );
}

export default BroadcastPirepGrid;