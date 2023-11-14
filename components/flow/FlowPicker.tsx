"use client";
import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Modal, Select, Stack, Typography} from "@mui/material";
import {AirportFlow} from "@prisma/client";
import {Add} from "@mui/icons-material";
import CustomFlowModal from "@/components/flow/CustomFlowModal";
import {AirportFlowConfig} from "@/types";

function FlowPicker({ icao, flows, changeFlow }: { icao: string, flows: AirportFlow[], changeFlow: (id: string) => Promise<void> }) {

    const [flowId, setFlowId] = useState('');
    const [formOpen, setFormOpen] = useState(false);
    const [customDialogOpen, setCustomDialogOpen] = useState(false);

    const createFlow = async (flowConfig: AirportFlowConfig) => {
        const res = await fetch(`/api/flow/${icao}`, {
            method: 'POST',
            body: JSON.stringify(flowConfig),
        });
        const { id }: { id: string, } = await res.json();
        await changeFlow(id);
        setCustomDialogOpen(false);
        setFormOpen(false);
    };

    return flows && (
        <>
            <CustomFlowModal icao={icao} open={customDialogOpen} onClose={() => setCustomDialogOpen(false)} onSubmit={createFlow} />
            { !formOpen && <Button variant="contained" onClick={(e) => setFormOpen(true)}>Change Flow</Button> }
            { formOpen && <form onSubmit={(e) => {
                e.preventDefault();
                changeFlow(flowId).then(() => setFormOpen(false));
            }}>
                <FormControl fullWidth required>
                    <InputLabel id="flow-selector-label">Flow</InputLabel>
                    <Select
                        id="flow-selector"
                        variant="filled"
                        value={flowId}
                        label="Flow"
                        onChange={(e) => setFlowId(e.target.value)}>
                        {flows.map((flow) => (
                            <MenuItem key={flow.id} value={flow.id}>{flow.name}</MenuItem>
                        ))}
                        <MenuItem onClick={() => setCustomDialogOpen(true)}>
                            <Add fontSize="large" />Add Custom Flow
                        </MenuItem>
                    </Select>
                </FormControl>

                <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ marginTop: '0.5rem', }}>
                    <Button variant="outlined" color="inherit" type="reset" onClick={() => setFormOpen(false)}>Cancel</Button>
                    <Button variant="contained" type="submit">Activate</Button>
                </Stack>

            </form> }
        </>

    );
}

export default FlowPicker;