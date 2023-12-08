"use client";
import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useRouter} from "next/navigation";

function AreaSidebar({ tracon, open, onClose }: { tracon?: {
        faaIdentifier: string,
        areas: {
            faaIdentifier: string,
            name: string,
        }[],
    },
    open: boolean,
    onClose: () => void,
}) {

    const router = useRouter();
    const drawerWidth = '10rem';


    return tracon && (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                maxWidth: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    maxWidth: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <Divider />
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => onClose()}>
                        <ListItemIcon>
                            <Close fontSize="large" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                {tracon.areas.map((area) => (
                    <ListItem key={tracon.faaIdentifier + area.faaIdentifier} disablePadding>
                        <ListItemButton onClick={() => router.replace(`/tracon/${tracon.faaIdentifier}/${area.faaIdentifier}`)}>
                            <ListItemText primary={area.faaIdentifier} sx={{ color: 'limegreen', }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default AreaSidebar;