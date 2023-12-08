"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {
    Button,
    CircularProgress,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar
} from "@mui/material";
import {useRouter} from "next/navigation";
import {fetchAllFacilities} from "@/actions/facility";
import TraconSidebar from "@/components/FacilityPicker/TraconSidebar";

function FacilityPickerSidebar() {

    const router = useRouter();
    const [facilities, setFacilities] = useState<{
        tracons: {
            faaIdentifier: string,
            areas: {
                faaIdentifier: string,
                name: string,
            }[]
        }[],
        atcts: {
            icao: string,
            faaIdentifier: string,
        }[]
    }>();
    const [traconSidebarOpen, setTraconSidebarOpen] = useState(false);

    const fetchFacilities = useCallback(async () => {
        return await fetchAllFacilities();
    }, []);

    useEffect(() => {
        fetchFacilities().then(setFacilities);
    }, [fetchFacilities]);

    const drawerWidth = '10rem';

    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open
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
                { !facilities && <CircularProgress /> }
                { facilities &&
                    <List disablePadding>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => router.replace(`/erids`)}>
                                <ListItemText primary="ERIDS" sx={{ color: 'red', textAlign: 'center', }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setTraconSidebarOpen(true)}>
                                <ListItemText primary="TRACON" sx={{ color: 'gold', textAlign: 'center', }} />
                            </ListItemButton>
                        </ListItem>
                        {facilities?.atcts.map((atct) => (
                            <ListItem key={atct.icao} disablePadding>
                                <ListItemButton onClick={() => router.replace(`/atct/${atct.icao}`)}>
                                    <ListItemText primary={atct.faaIdentifier} secondary={atct.icao} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                }
            </Drawer>
            <TraconSidebar tracons={facilities?.tracons || []} open={traconSidebarOpen} onClose={() => setTraconSidebarOpen(false)} />
        </>

    );
}

export default FacilityPickerSidebar;