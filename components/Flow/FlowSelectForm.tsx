"use client";
import React, {useState} from 'react';
import {
    Button,
    CircularProgress,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {AirportFlow} from "@prisma/client";
import {Add, Delete, Edit} from "@mui/icons-material";
import FlowDisplay from "@/components/Flow/FlowDisplay";
import {deleteFlow, fetchFlows} from "@/actions/flow";
import {useRouter} from "next/navigation";

function FlowSelectForm({ icao, flows }: { icao: string, flows: any[] }) {

    const [selectedFlowId, setSelectedFlowId] = useState<string>('');

    const router = useRouter();

    const submitFlow = (flowId: string) => {
        router.push(`flow/activate/${flowId}`);
    }

    const onDeleteFlow = (flowId: string) => {
        setSelectedFlowId('');
        deleteFlow(icao, flowId).then(() => {
            fetchFlows(icao).then(() => router.refresh());
        });
    }


    return (
        <>
            { !flows && <CircularProgress /> }
            { flows &&
                <Grid container columns={2} spacing={2} rowSpacing={10}>
                    <Grid item xs={2} md={1}>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            submitFlow(selectedFlowId);
                        }}>
                            <FormControl fullWidth required>
                                <InputLabel id="flow-select-label">Flow</InputLabel>
                                <Select
                                    labelId="flow-select-label"
                                    id="flow-select"
                                    value={selectedFlowId}
                                    label="Flow"
                                    onChange={(e) => setSelectedFlowId(e.target.value)}
                                >
                                    {flows.map((flow: AirportFlow) => (
                                        <MenuItem key={flow.id} value={flow.id}>
                                            {flow.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Stack direction="row" spacing={2} sx={{ marginTop: '1rem', }}>
                                <Button variant="contained" size="large" type="submit">Activate Flow</Button>
                                <Button variant="outlined" disabled={!selectedFlowId} color="inherit" startIcon={<Edit />} sx={{ marginTop: '1rem', flexGrow: 1, }} onClick={() => router.push(`flow/edit/${selectedFlowId}`)}>Edit Flow</Button>
                                <Button variant="outlined" disabled={!selectedFlowId} color="inherit" startIcon={<Delete />} sx={{ marginTop: '1rem', }} onClick={() => onDeleteFlow(selectedFlowId)}>Delete Flow</Button>
                            </Stack>
                            <Button variant="contained" size="large" sx={{ marginTop: '1rem', }} startIcon={<Add />} onClick={() => router.push('flow/new')}>New Flow</Button>
                        </form>

                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Typography variant="h4">Preview</Typography>
                        { !selectedFlowId && <Typography>A preview will appear after you select a flow</Typography> }
                        { selectedFlowId && <FlowDisplay flow={flows.find((flow) => flow.id === selectedFlowId)} condensed={false} /> }
                    </Grid>
                </Grid>
            }
        </>
    );
}

export default FlowSelectForm;