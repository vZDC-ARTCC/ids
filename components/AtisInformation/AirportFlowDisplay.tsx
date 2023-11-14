"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {AirportFlow, Runway} from "@prisma/client";
import {Box, Grid, Stack, Typography} from "@mui/material";
import FlowPicker from "@/components/flow/FlowPicker";

function AirportFlowDisplay({ icao, condensed = false }: { icao: string, condensed?: boolean, }) {

    const [flows, setFlows] = useState<AirportFlow[]>();
    const [activeFlow, setActiveFlow] = useState<AirportFlow>();
    
    const fetchFlows = useCallback(async () => {
       const res = await fetch(`/api/flow/${icao}`);
       return await res.json() as AirportFlow[];
    }, [icao]);

    const fetchActiveFlow = useCallback(async () => {
        const res = await fetch(`/api/flow/${icao}/active`, {
            cache: "no-cache",
            next: {
                revalidate: 30,
            }
        });
        return await res.json() as AirportFlow;
    }, [icao]);

    useEffect(() => {
        fetchFlows().then(setFlows);
        fetchActiveFlow().then(setActiveFlow);

        setInterval(() => {
            fetchActiveFlow().then(setActiveFlow);
        }, 15000);
    }, [fetchFlows, fetchActiveFlow]);

    const changeFlow = async (id: string) => {
        await fetch('/api/flow/KIAD/active', {
            method: 'POST',
            body: JSON.stringify({ id, }),
        });
        await fetchFlows().then(setFlows);
        await fetchActiveFlow().then(setActiveFlow);
    };


    const departingRunways: Runway[] = (activeFlow as any)?.departureRunways;
    const arrivingRunways: Runway[] = (activeFlow as any)?.arrivalRunways;

    if (condensed) {
        return (
                <Stack direction="column" spacing={2}>
                { !activeFlow && <Typography color="red" fontWeight={700}>An active flow is not selected.  Select a flow from the dropdown menu to see all active runways</Typography> }
                { activeFlow &&
                    <Box>
                        <Typography variant="h6" fontWeight={700} textAlign="center">{activeFlow.name}</Typography>
                        <Box sx={{ textAlign: 'center', marginBottom: '0.5rem', }}>
                            <Typography variant="subtitle1" fontWeight={500}>DEPARTING</Typography>
                            <Stack direction="row" spacing={4} justifyContent="center">
                                {departingRunways.filter((rwy) => rwy.departureTypes.length > 0).map((rwy) => (
                                    <Box key={rwy.id}>
                                        <Typography variant="h5" color="green" fontWeight={800}>{rwy.runwayNumber}</Typography>
                                        <Typography variant="body2" color="deepskyblue" fontWeight={500}>{rwy.departureTypes.toString().replaceAll(",", " / ")}</Typography>
                                    </Box>
                                ))}
                            </Stack>

                        </Box>
                        <Box sx={{ textAlign: 'center', }}>
                            <Typography variant="subtitle1" fontWeight={500}>ARRIVING</Typography>
                            <Stack direction="row" spacing={2} justifyContent="center">
                                {arrivingRunways.filter((rwy) => rwy.approachTypes.length > 0).map((rwy) => (
                                    <Box key={rwy.id}>
                                        <Typography variant="h5"  color="green" fontWeight={800}>{rwy.runwayNumber}</Typography>
                                        <Typography variant="body2" color="deepskyblue" fontWeight={500}>{rwy.approachTypes.toString().replaceAll(",", " / ")}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Box> }
                { flows && <FlowPicker icao={icao} flows={flows} changeFlow={changeFlow} /> }
            </Stack>
        );
    } else {
        return (
            <Stack direction="column" spacing={4}>
                { !activeFlow && <Typography color="red" fontWeight={700}>An active flow is not selected.  Select a flow from the dropdown menu to see all active runways</Typography> }
                { activeFlow &&
                    <Box sx={{ padding: 1 }}>
                        <Typography variant="h5" fontWeight={700} textAlign="center" sx={{ padding: '1rem', border: 1, }}>{activeFlow.name}</Typography>
                        <Grid container columns={2} sx={{ marginY: '1rem', minHeight: '5rem', }}>
                            <Grid item xs={2} md={1} textAlign="center" sx={{ borderRight: 1, }}>
                                <Typography variant="subtitle1" fontWeight={500} sx={{ marginBottom: '0.5rem', }}>DEPARTING</Typography>
                                {departingRunways.filter((rwy) => rwy.departureTypes.length > 0).map((rwy) => (
                                    <Box key={rwy.id} sx={{ marginBottom: '0.5rem', }}>
                                        <Typography variant="h3" color="green" fontWeight={800}>{rwy.runwayNumber}</Typography>
                                        <Typography color="deepskyblue" fontWeight={800}>{rwy.departureTypes.toString().replaceAll(",", " / ")}</Typography>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={2} md={1} textAlign="center">
                                <Typography variant="subtitle1" fontWeight={500} sx={{ marginBottom: '0.5rem', }}>ARRIVING</Typography>
                                {arrivingRunways.filter((rwy) => rwy.approachTypes.length > 0).map((rwy) => (
                                    <Box key={rwy.id} sx={{ marginBottom: '0.5rem', }}>
                                        <Typography variant="h3" color="green" fontWeight={800}>{rwy.runwayNumber}</Typography>
                                        <Typography color="deepskyblue" fontWeight={800}>{rwy.approachTypes.toString().replaceAll(",", " / ")}</Typography>
                                    </Box>                        ))}
                            </Grid>
                        </Grid>
                    </Box> }
                { flows && <FlowPicker icao={icao} flows={flows} changeFlow={changeFlow} /> }
            </Stack>
        );
    }

}

export default AirportFlowDisplay;