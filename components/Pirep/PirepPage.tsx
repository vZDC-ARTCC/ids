import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import LoginButton from "@/components/Login/LoginButton";
import {fetchPireps} from "@/actions/pirep";
import {Container, Stack, Typography} from "@mui/material";
import PirepForm from "@/components/Pirep/PirepForm";
import PirepList from "@/components/Pirep/PirepList";

async function PirepPage() {
    if (!await getServerSession(authOptions)) return <LoginButton session={null} />;

    const pireps = await fetchPireps();

    return (
        <Container maxWidth="md">
            <Stack direction="column" alignItems="center" spacing={2} sx={{ marginTop: '1rem', }}>
                <Typography variant="h3">PIREPs</Typography>
                <Typography variant="h6">New PIREP</Typography>
                <PirepForm />
                <Typography variant="h6">Active PIREPs:</Typography>
                <PirepList pireps={pireps} deleteButton={true} />
            </Stack>
        </Container>
    );
}

export default PirepPage;