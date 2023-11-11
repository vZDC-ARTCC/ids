"use client";
import React, {useState} from 'react';
import {Box, IconButton, ListItem, ListItemButton, ListItemText, Modal, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

function SopListItem({ sopLink, }: { sopLink: string, }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{ padding: '4rem', height: '90vh', }}>
                    <IconButton size="large" onClick={() => setOpen(false)} sx={{ position: 'absolute', right: '5rem', }}>
                        <Close fontSize="large" />
                    </IconButton>
                    <Typography variant="h4" sx={{ textAlign: 'center', paddingY: '1rem', }}>SOP</Typography>
                    <embed src={sopLink} type="application/pdf" style={{ width: '100%', height: '100%', }}/>
                </Box>
            </Modal>
            <ListItem disablePadding>
                <ListItemButton onClick={() => setOpen(true)}>
                    <ListItemText primary="SOP"/>
                </ListItemButton>
            </ListItem>
        </>
    );
}

export default SopListItem;