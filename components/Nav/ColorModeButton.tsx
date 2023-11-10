"use client";
import React, {useContext} from 'react';
import {IconButton, Tooltip, useTheme} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import {ColorModeContext} from "@/context/ColorModeContext";

function ColorModeButton() {

    const theme = useTheme();

    const setColorMode = useContext(ColorModeContext);

    return (
        <Tooltip title={`${theme.palette.mode === "light" ? 'Dark' : 'Light'} Mode`}>
            <IconButton sx={{ml: 1}} onClick={() => setColorMode(theme.palette.mode === 'dark' ? 'light' : 'dark')}
                        color="inherit" aria-label={`${theme.palette.mode === "light" ? 'Dark' : 'Light'} Mode`}>
                {theme.palette.mode === 'dark' ? <LightMode/> : <DarkMode/>}
            </IconButton>
        </Tooltip>

    );
}

export default ColorModeButton;