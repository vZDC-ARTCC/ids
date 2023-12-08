"use client";
import React, {useState} from 'react';
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import {Close} from "@mui/icons-material";
import AreaSidebar from "@/components/FacilityPicker/AreaSidebar";

function TraconSidebar({ tracons, open, onClose }: { tracons: {
    faaIdentifier: string,
    areas: {
        faaIdentifier: string,
        name: string,
    }[],
    }[],
    open: boolean,
    onClose: () => void,
}) {
    const [activeTracon, setActiveTracon] = useState<{
        faaIdentifier: string,
        areas: {
            faaIdentifier: string,
            name: string,
        }[]
    }>();

    const drawerWidth = '10rem';


    return (
        <>
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
                    {tracons.map((tracon) => (
                        <ListItem key={tracon.faaIdentifier} disablePadding>
                            <ListItemButton onClick={() => setActiveTracon(tracon)}>
                                <ListItemText primary={tracon.faaIdentifier} sx={{ color: 'gold', }}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <AreaSidebar tracon={activeTracon} open={!!activeTracon} onClose={() => setActiveTracon(undefined)} />
        </>

    );
}

export default TraconSidebar;