import React from 'react';
import {Button, Stack} from "@mui/material";
import Link from "next/link";

function WeatherLayout({ children }: { children: React.ReactNode, }) {

    return (
        <Stack direction="column" spacing={2} alignItems="center">
            <Stack direction="row" spacing={2}>
                <Link href={`/erids/wx/pdv`} style={{ color: 'inherit', }}>
                    <Button color="inherit" variant="outlined">Pre-Duty Video</Button>
                </Link>
                <Link href={`/erids/wx/radar`} style={{ color: 'inherit', }}>
                    <Button color="inherit" variant="outlined">WX Radar</Button>
                </Link>
            </Stack>
            <div>
                {children}
            </div>
        </Stack>
    );
}

export default WeatherLayout;