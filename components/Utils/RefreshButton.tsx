"use client";
import React from 'react';
import {useRouter} from "next/navigation";
import {IconButton, Tooltip} from "@mui/material";
import {Refresh} from "@mui/icons-material";

function RefreshButton() {

    const router = useRouter();

    return (
        <Tooltip title="Refresh">
            <IconButton size="large" onClick={() => router.refresh()}>
                <Refresh />
            </IconButton>
        </Tooltip>

    );
}

export default RefreshButton;