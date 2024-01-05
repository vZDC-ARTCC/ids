import React from 'react';
import {Stack, Typography} from "@mui/material";
import {Runway} from "@prisma/client";
import ActiveRunway from "@/components/Flow/ActiveRunway";

function FlowDisplay({ flow, condensed }: { flow: any, condensed: boolean, }) {
    return (
        <Stack direction="column" alignItems="center" spacing={condensed ? 1 : 4}>
            <Typography variant={condensed ? 'h5' : 'h4'} fontWeight={700} color="mediumvioletred">{flow.name}</Typography>
            <Stack direction="column" alignItems="center" spacing={condensed ? 1 : 2}>
                <Typography variant="subtitle2">DEP</Typography>
                <Stack direction="row" spacing={2}>
                    {flow.departureRunways.filter((runway: Runway) => runway.departureTypes.length > 0).map((runway: Runway) => (
                        <ActiveRunway key={runway.id} number={runway.runwayNumber} types={runway.departureTypes} condensed={condensed} />
                    ))}
                </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={condensed ? 1 : 2}>
                <Typography variant="subtitle2">ARR</Typography>
                <Stack direction="row" spacing={2}>
                    {flow.arrivalRunways.filter((runway: Runway) => runway.approachTypes.length > 0).map((runway: Runway) => (
                        <ActiveRunway key={runway.id} number={runway.runwayNumber} types={runway.approachTypes} condensed={condensed} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default FlowDisplay;