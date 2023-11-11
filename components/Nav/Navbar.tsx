import React from 'react';
import {AppBar, Stack, Toolbar, Typography} from "@mui/material";
import Logo from "@/components/Logo/Logo";
import ColorModeButton from "@/components/Nav/ColorModeButton";
import LoginButton from "@/components/Login/LoginButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

async function Navbar() {

    const session = await getServerSession(authOptions);

    return (
        <AppBar position="sticky" sx={{ zIndex: 9999, }}>
            <Toolbar>
                <Stack direction="row" spacing={2} alignItems="center" sx={{flexGrow: 1,}}>
                    <Logo/>
                    <Typography variant="h4">vIDS</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <ColorModeButton/>
                    <LoginButton session={session}/>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;