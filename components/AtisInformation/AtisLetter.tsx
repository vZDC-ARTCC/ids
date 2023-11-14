import React from 'react';
import {VatsimATISConnection} from "@/types";
import {Typography} from "@mui/material";

function AtisLetter({ vatsimATIS }: { vatsimATIS?: VatsimATISConnection }) {

    return (
        <Typography variant="h1" fontSize={100} color="green" textAlign="center" sx={{ fontWeight: 700}}>{ vatsimATIS ? vatsimATIS.atis_code : '-' }</Typography>
    );
}

export default AtisLetter;