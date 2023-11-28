import React from 'react';
import {AppBar, Stack, Toolbar, Typography} from "@mui/material";

function Footer() {
    return (
        <AppBar position="static" sx={{ marginTop: '10rem', }}>
            <Toolbar>
                <Stack direction="column" spacing={2} alignItems="center" sx={{ flexGrow: 1, paddingY: '2rem', }}>
                    <Typography>&copy; Virtual Washington Air Route Traffic Control Center</Typography>
                    <Typography color="red" fontWeight={700}>NOT FOR REAL WORLD USE</Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;