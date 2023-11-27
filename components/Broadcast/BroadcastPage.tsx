import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import LoginButton from "@/components/Login/LoginButton";
import {Container, Stack, Typography} from "@mui/material";
import {fetchBroadcasts} from "@/actions/broadcast";
import BroadcastList from "@/components/Broadcast/BroadcastList";
import BroadcastForm from "@/components/Broadcast/BroadcastForm";

const DEV_MODE = process.env['DEV_MODE'] === 'true';
async function BroadcastPage() {
    const session = await getServerSession(authOptions);
    if (!session) return <LoginButton session={session} />;
    if (session.user.rating < 4 && !DEV_MODE) return <Typography>You do not have permission to view this page.</Typography>;

    const broadcasts = await fetchBroadcasts();

    return (
        <Container maxWidth="md">
            <Stack direction="column" alignItems="center" spacing={2} sx={{ marginTop: '1rem', }}>
                <Typography variant="h3">CIC Notices / IDS Broadcasts</Typography>
                <Typography variant="h6">Active Notices:</Typography>
                <BroadcastList broadcasts={broadcasts} deleteButton={true} />
                <Typography variant="h6">New Broadcast</Typography>
                <BroadcastForm />
            </Stack>
        </Container>

    );
}

export default BroadcastPage;