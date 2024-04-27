"use client";
import React from 'react';
import {fetchActiveFlow} from "@/actions/flow";
import {
    Box,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import OptionSelect from "@/components/Airport/Option/OptionSelect";
import FlowDisplay from "@/components/Flow/FlowDisplay";
import {setOptionValue} from "@/actions/option";
import {useRouter} from "next/navigation";
import {Prisma} from "@prisma/client";

const flowWithRelations = Prisma.validator<Prisma.AirportFlowDefaultArgs>()({
    include: {
        departureRunways: true,
        arrivalRunways: true,
        traconVisibleOptions: true,
    },
});

export type DetailedFlow = Prisma.AirportFlowGetPayload<typeof flowWithRelations>;

function AirportInformation({ icao, activeFlow, condensed }: { icao: string, activeFlow: DetailedFlow | undefined, condensed: boolean, }) {

    const router = useRouter();

    return (
        <Grid container columns={10} sx={{ height: '100%', borderTop: { xs: 1, xl: 0, }, }}>
            <Grid item xs={10} md={4} sx={{ borderRight: { md: 1, }, }}>
                <Stack direction="column" spacing={4} sx={{ padding: '1rem', }}>
                    { !activeFlow && <Typography color="red">No active flow has been selected.</Typography>}
                    {activeFlow && activeFlow.traconVisibleOptions.map((option) => (
                        <Stack key={option.id} direction="column" alignItems="center" spacing={1}>
                            <Typography variant={condensed ? 'h6' : 'h5'} color="gold" fontWeight={700}>{option.name}</Typography>
                            <OptionSelect option={option} condensed={condensed} changeValue={(val) => {
                                setOptionValue(option.id, val || '').then(() => {
                                    fetchActiveFlow(icao).then(() => router.refresh());
                                });
                            }}/>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={10} md={6} sx={{ borderRight: { lg: 1, }, borderTop: { xs: 1, md: 0, }, }}>
                <Box sx={{ padding: '1rem', }}>
                    { !activeFlow && <Typography variant={condensed ? 'h6' : 'h5'} color="red">No active flow has been selected.</Typography>}
                    { activeFlow && <FlowDisplay flow={activeFlow} condensed={condensed} /> }
                </Box>
            </Grid>
        </Grid>
    );
}

export default AirportInformation;