"use client";

import {CssBaseline, PaletteMode, ThemeProvider, useMediaQuery} from "@mui/material";
import React, {useEffect, useState} from "react";
import NextAppDirEmotionCacheProvider from "@/theme/EmotionCache";
import getTheme from "@/theme/theme";
import {ColorModeContext} from "@/context/ColorModeContext";

export default function ThemeRegistry({children}: { children: React.ReactNode }) {

    const [colorMode, setColorMode] = useState<PaletteMode>('light');

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        const colorMode = localStorage.getItem('colorMode');

        if (colorMode) {
            setColorMode(colorMode as PaletteMode);
        } else {
            setColorMode(prefersDarkMode ? 'dark' : 'light');
        }

    }, [prefersDarkMode])

    const setMode = (mode: PaletteMode) => {
        localStorage.setItem('colorMode', mode)
        setColorMode(mode);
    }

    return (
        <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
            <ColorModeContext.Provider value={setMode}>
                <ThemeProvider theme={getTheme(colorMode)}>
                    <CssBaseline/>
                    {children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </NextAppDirEmotionCacheProvider>

    );
}