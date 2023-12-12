"use client";
import React, {useEffect, useState} from 'react';
import FlowSelectForm from "@/components/Flow/FlowSelectForm";
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {AirportFlow} from "@prisma/client";
import {ListItemText, MenuItem, Select, Stack, Typography} from "@mui/material";

function FlowPage({ params }: { params: { id: string, area: string, }, }) {

    const { id, area } = params;
    const [flows, setFlows] = useState<{ icao: string, flows: AirportFlow | any, }[]>([]);
    const [selectedAirportIcao, setSelectedAirportIcao] = useState<string>();

    useEffect(() => {
        fetchTraconAreaWithDetail(id, area).then((traconArea) => {
            setFlows([
                ...traconArea.majorFields.map((f) => ({ icao: f.icao, flows: f.flows })),
                ...traconArea.minorFields.map((f) => ({ icao: f.icao, flows: f.flows })),
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
                {flows.map((flow) => (
                    <MenuItem key={flow.icao} value={flow.icao}>
                        <ListItemText primary={flow.icao} />
                    </MenuItem>
                ))}
            </Select>
            { selectedAirportIcao && <FlowSelectForm icao={selectedAirportIcao} flows={flows.find((f) => f.icao === selectedAirportIcao)?.flows} /> }
        </Stack>
    );
}

export default FlowPage;