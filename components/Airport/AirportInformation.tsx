"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {fetchActiveFlow, fetchFlows, setActiveFlow} from "@/actions/flow";
import {
    Box,
    CircularProgress,
    FormControl,
    Grid, IconButton,
    InputLabel,
    Stack,
    TableCell,
    Tooltip,
    Typography
} from "@mui/material";
import {CustomizableOption, Runway} from "@prisma/client";
import OptionSelect from "@/components/Airport/Option/OptionSelect";
import FlowDisplay from "@/components/Flow/FlowDisplay";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {setOptionValue} from "@/actions/option";
import FlowDropdown from "@/components/Flow/FlowDropdown";
import {Check, Edit} from "@mui/icons-material";

function AirportInformation({ icao, condensed }: { icao: string, condensed: boolean, }) {

    const [flow, setFlow] = useState<any>();
    const [loading, setLoading ] = useState(true);
    const [flowChanged, setFlowChanged] = useState(false);
    const [optionsChanged, setOptionsChanged] = useState(false);
    const [first, setFirst] = useState(true);

    const updateFlow = useCallback(() => {
        fetchActiveFlow(icao).then((newFlow) => {
            setFlow((prev: any) => {
                if (!first && newFlow?.id !== prev?.id) {
                    setFlowChanged(true);
                }
                if (!first && (newFlow && prev) && (
                    newFlow?.traconVisibleOptions.length !== prev?.traconVisibleOptions.length ||
                    !newFlow?.traconVisibleOptions.every((val: CustomizableOption, i) => val.name === prev?.traconVisibleOptions[i].name && val.value === prev?.traconVisibleOptions[i].value))) {
                    setOptionsChanged(true);
                }
                return newFlow;
            })
        }).then(() => setLoading(false));
    }, [first, icao]);

    useEffect(() => {
        updateFlow();
        setFirst(false);
        const activeFlowInterval = setInterval(() => {
            updateFlow();
        }, 15000);
        return () => clearInterval(activeFlowInterval);
    }, [icao, updateFlow]);

    return (
        <Grid container columns={10} sx={{ height: '100%', borderTop: { xs: 1, xl: 0, }, }}>
            <ChangeSnackbar open={flowChanged} change={{ message: `${icao} > ${flow?.name}`, type: 'flow'}} onAcknowledge={setFlowChanged} />
            <ChangeSnackbar open={optionsChanged} change={{ message: `${icao} > TVO CHANGED`, type: 'flow'}} onAcknowledge={setOptionsChanged} />
            <Grid item xs={10} md={4} sx={{ borderRight: { md: 1, }, }}>
                <Stack direction="column" spacing={4} sx={{ padding: '1rem', }}>
                    { loading && <CircularProgress /> }
                    { !loading && !flow && <Typography color="red">No active flow has been selected.</Typography>}
                    {flow && flow.traconVisibleOptions.map((option: CustomizableOption) => (
                        <Stack key={option.id} direction="column" alignItems="center" spacing={1}>
                            <Typography variant={condensed ? 'h6' : 'h5'} color="gold" fontWeight={700}>{option.name}</Typography>
                            <OptionSelect option={option} condensed={condensed} changeValue={(val) => {
                                setOptionValue(option.id, val || '').then(() => {
                                    fetchActiveFlow(icao).then(setFlow);
                                });
                            }}/>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={10} md={6} sx={{ borderRight: { lg: 1, }, borderTop: { xs: 1, md: 0, }, }}>
                <Box sx={{ padding: '1rem', }}>
                    { loading && <CircularProgress /> }
                    { !loading && !flow && <Typography variant={condensed ? 'h6' : 'h5'} color="red">No active flow has been selected.</Typography>}
                    { flow && <FlowDisplay flow={flow} condensed={condensed} /> }
                </Box>
            </Grid>
        </Grid>
    );
}

export default AirportInformation;