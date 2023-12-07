"use client";
import React, {useEffect, useState} from 'react';
import {fetchActiveFlow} from "@/actions/flow";
import {Box, CircularProgress, Grid, Stack, Typography} from "@mui/material";
import {CustomizableOption} from "@prisma/client";
import OptionSelect from "@/components/Airport/Option/OptionSelect";
import FlowDisplay from "@/components/Flow/FlowDisplay";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";

function AirportInformation({ icao, condensed }: { icao: string, condensed: boolean, }) {

    const [activeFlow, setActiveFlow] = useState<any>();
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        fetchActiveFlow(icao).then(setActiveFlow).then(() => setLoading(false));
        const activeFlowInterval = setInterval(async () => {
            setActiveFlow(await fetchActiveFlow(icao));
        }, 15000);
        return () => clearInterval(activeFlowInterval);
    }, [icao]);

    return (
        <Grid container columns={10} sx={{ height: '100%', borderTop: { xs: 1, xl: 0, }, }}>
            <Grid item xs={10} md={4} sx={{ borderRight: { md: 1, }, }}>
                <Stack direction="column" spacing={4} sx={{ padding: '1rem', }}>
                    { loading && <CircularProgress /> }
                    {activeFlow && activeFlow.traconVisibleOptions.map((option: CustomizableOption) => (
                        <Stack key={option.id} direction="column" alignItems="center" spacing={1}>
                            <Typography variant={condensed ? 'h6' : 'h5'} color="gold" fontWeight={700}>{option.name}</Typography>
                            <OptionSelect option={option} condensed={condensed} />
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