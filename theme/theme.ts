// noinspection JSUnusedLocalSymbols

import {createTheme, PaletteMode, PaletteOptions, Theme} from "@mui/material";
import {Roboto} from "next/font/google";

const lightPalette: PaletteOptions = {
    primary: {
        main: '#500E0E',
        light: '#500E0E',
        dark: '#500E0E',
        contrastText: '#EDEDF5',
    },
    background: {
        default: '#EDEDF5',
        paper: '#FFFFFF',
    },
    text: {
        primary: '#000000'
    }
};

const darkPalette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#500E0E',
        light: '#500E0E',
        dark: '#500E0E',
        contrastText: '#EDEDF5',
    }
};

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function getTheme(mode: PaletteMode): Theme {
    return createTheme({
        palette: darkPalette,
        // palette: mode === "light" ? lightPalette : darkPalette,
        typography: {
            fontFamily: roboto.style.fontFamily,
            fontSize: 12,
        },
    });
}