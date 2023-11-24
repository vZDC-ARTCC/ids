"use client";
import React from 'react';
import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useRouter} from "next/navigation";

function SidebarListItem({ name, link, color }: { name: string, link: string, color?: string, }) {

    const router = useRouter();

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => router.replace(link)} sx={{ textAlign: 'center', }}>
                <ListItemText primary={name} style={{ color, }} />
            </ListItemButton>
        </ListItem>
    );
}

export default SidebarListItem;