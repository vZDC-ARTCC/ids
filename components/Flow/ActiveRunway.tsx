import React from 'react';
import {Stack, Typography} from "@mui/material";

function ActiveRunway({ number, types, condensed }: { number: string, types: string[], condensed: boolean, }) {
    return (
        <Stack direction="column" spacing={1} alignItems="center">
            <Typography variant={condensed ? 'h5' : 'h4'} color="lawngreen" fontWeight={600}>{number}</Typography>
            <Typography variant="body2" color="red" fontWeight={700}>{types.toString().replaceAll(',', ' / ')}</Typography>
        </Stack>
    );
}

export default ActiveRunway;