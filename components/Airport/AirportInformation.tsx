"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {fetchActiveFlow} from "@/actions/flow";
import {Box, CircularProgress, Grid, Stack, TableCell, Tooltip, Typography} from "@mui/material";
import {CustomizableOption, Runway} from "@prisma/client";
import OptionSelect from "@/components/Airport/Option/OptionSelect";
import FlowDisplay from "@/components/Flow/FlowDisplay";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {setOptionValue} from "@/actions/option";

function AirportInformation({ icao, condensed, tableCell }: { icao: string, condensed: boolean, tableCell?: boolean, }) {

    const [activeFlow, setActiveFlow] = useState<any>();
    const [loading, setLoading ] = useState(true);
    const [flowChanged, setFlowChanged] = useState(false);
    const [optionsChanged, setOptionsChanged] = useState(false);
    const [first, setFirst] = useState(true);
    
    const updateFlow = useCallback(() => {
        fetchActiveFlow(icao).then((newFlow) => {
            setActiveFlow((prev: any) => {
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
    }, [updateFlow]);

    if (tableCell) {
        const depRunways = activeFlow?.departureRunways.filter((runway: Runway) => runway.departureTypes.length > 0).map((runway: Runway) => runway.runwayNumber);
        const appRunways = activeFlow?.arrivalRunways.filter((runway: Runway) => runway.approachTypes.length > 0).map((runway: Runway) => runway.runwayNumber);
        return <Tooltip title={`DEP: ${depRunways?.join('/') || 'N/A'} ARR: ${appRunways?.join('/') || 'N/A'}`}><TableCell>{activeFlow?.name || '-'}</TableCell></Tooltip>
    }

    return (
        <Grid container columns={10} sx={{ height: '100%', borderTop: { xs: 1, xl: 0, }, }}>
            <ChangeSnackbar open={flowChanged} change={{ message: `${icao} > ${activeFlow?.name}`, type: 'flow'}} onAcknowledge={setFlowChanged} />
            <ChangeSnackbar open={optionsChanged} change={{ message: `${icao} > TVO CHANGED`, type: 'flow'}} onAcknowledge={setOptionsChanged} />
            <Grid item xs={10} md={4} sx={{ borderRight: { md: 1, }, }}>
                <Stack direction="column" spacing={4} sx={{ padding: '1rem', }}>
                    { loading && <CircularProgress /> }
                    { !loading && !activeFlow && <Typography color="red">No active flow has been selected.</Typography>}
                    {activeFlow && activeFlow.traconVisibleOptions.map((option: CustomizableOption) => (
                        <Stack key={option.id} direction="column" alignItems="center" spacing={1}>
                            <Typography variant={condensed ? 'h6' : 'h5'} color="gold" fontWeight={700}>{option.name}</Typography>
                            <OptionSelect option={option} condensed={condensed} changeValue={(val) => {
                                setOptionValue(option.id, val || '').then(() => {
                                    fetchActiveFlow(icao).then(setActiveFlow);
                                });
                            }}/>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={10} md={6} sx={{ borderRight: { lg: 1, }, borderTop: { xs: 1, md: 0, }, }}>
                <Box sx={{ padding: '1rem', }}>
                    { loading && <CircularProgress /> }
                    { !loading && !activeFlow && <Typography variant={condensed ? 'h6' : 'h5'} color="red">No active flow has been selected.</Typography>}
                    { activeFlow && <FlowDisplay flow={activeFlow} condensed={condensed} /> }
                </Box>
            </Grid>
        </Grid>
    );
}

export default AirportInformation;