"use client";
import React, {useEffect, useState} from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {ListItemText, MenuItem, Select, Stack, Typography} from "@mui/material";
import ChartsTab from "@/components/Tabs/ChartsTab";

function TraconProceduresPage({ params }: { params: { id: string, area: string, }, }) {
    const { id, area } = params;
    const [airports, setAirports] = useState<string[]>([]);
    const [selectedAirportIcao, setSelectedAirportIcao] = useState<string>();

    useEffect(() => {
        fetchTraconAreaWithDetail(id, area).then((traconArea) => {
            setAirports([
                ...traconArea.majorFields.map((f) => (f.icao)),
                ...traconArea.minorFields.map((f) => (f.icao)),
            ]);
        })
    }, [id, area]);

    return (
        <Stack direction="column" spacing={2}>
            <Typography>Select an airport from the list.</Typography>
            <Select
                required
                fullWidth
                sx={{ minWidth: '10rem', }}
                value={selectedAirportIcao}
                onChange={(e) => setSelectedAirportIcao(e.target.value)}
            >
                {airports.map((airport) => (
                    <MenuItem key={airport} value={airport}>
                        <ListItemText primary={airport} />
                    </MenuItem>
                ))}
            </Select>
            { selectedAirportIcao && <ChartsTab icao={selectedAirportIcao} /> }
        </Stack>
    );
}

export default TraconProceduresPage;