import React from 'react';
import {AppBar, Stack, Toolbar, Typography} from "@mui/material";
import getConfig from 'next/config';

const DEV_MODE = process.env['DEV_MODE'] === 'true';

function Footer() {

    const { publicRuntimeConfig } = getConfig();

    return (
        <AppBar position="static" sx={{ marginTop: '10rem', }}>
            <Toolbar>
                <Stack direction="column" spacing={2} alignItems="center" sx={{ flexGrow: 1, paddingY: '2rem', }}>
                    <Typography>&copy; Virtual Washington Air Route Traffic Control Center</Typography>
                    <Typography color="red" fontWeight={700}>NOT FOR REAL WORLD USE</Typography>
                    { DEV_MODE && <Typography variant="subtitle2" color="limegreen">Development Build</Typography> }
                    { !DEV_MODE && <Typography>v{publicRuntimeConfig?.version}</Typography> }
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;