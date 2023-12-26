"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, Grid, Typography} from "@mui/material";
import {Broadcast, Pirep} from "@prisma/client";
import {fetchBroadcasts} from "@/actions/broadcast";
import {fetchPireps} from "@/actions/pirep";
import BroadcastList from "@/components/Broadcast/BroadcastList";
import PirepList from "@/components/Pirep/PirepList";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";

function BroadcastPirepGrid({ horizontal = false }: { horizontal?: boolean, }) {

    const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
    const [pireps, setPireps] = useState<Pirep[]>([]);
    const [broadcastsChanged, setBroadcastsChanged] = useState(false);
    const [pirepsChanged, setPirepsChanged] = useState(false);
    const [first, setFirst] = useState(true);

    const updateBroadcasts = useCallback(() => {
        fetchBroadcasts().then((newBroadcasts) => {
            setBroadcasts((prev) => {
                if (!first && (newBroadcasts.length !== prev.length ||
                    !newBroadcasts.every((b, i) => prev[i].message === b.message))) {
                    setBroadcastsChanged(true);
                }
                return newBroadcasts;
            })
        });
    }, [first]);

    const updatePireps = useCallback(() => {
        fetchPireps().then((newPireps) => {
            setPireps((prev) => {
                if (!first && (newPireps.length !== prev.length ||
                    !newPireps.every((p, i) => prev[i].id === p.id))) {
                    setPirepsChanged(true);
                }
                return newPireps;
            })
        });
    }, [first]);


    useEffect(() => {
        updateBroadcasts();
        updatePireps();
        setFirst(false);
        const broadcastPirepInterval = setInterval(() => {
            updateBroadcasts();
            updatePireps();
        }, 5000);
        return () => clearInterval(broadcastPirepInterval);
    }, [updateBroadcasts, updatePireps]);


    return (
        <Grid container columns={2} sx={{ border: 1, }}>
            <ChangeSnackbar open={broadcastsChanged} change={{ message: 'CHANGES', type: "broadcast", }} onAcknowledge={setBroadcastsChanged} />
            <ChangeSnackbar open={pirepsChanged} change={{ message: 'CHANGES', type: "pirep", }} onAcknowledge={setPirepsChanged} />
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