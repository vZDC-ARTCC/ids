"use client";
import React from 'react';
import {Button, Stack} from "@mui/material";
import {FACILITIES, FacilityType} from "@/facility/facilities";
import {useRouter} from "next/navigation";

function FacilityPicker() {

    const facilities = FACILITIES;
    const atcts = facilities.filter((facility) => facility.type === FacilityType.ATCT);
    const tracons = facilities.filter((facility) => facility.type === FacilityType.TRACON);

    const router = useRouter();

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Stack spacing={2}>
                    {atcts.map((atct) => (
                        <Button key={atct.name} variant="contained"
                                onClick={() => router.replace(`/atct/${atct.config.id}`)}>{atct.name} ATCT</Button>
                    ))}
                </Stack>
                <Stack spacing={2}>
                    {tracons.map((tracon) => (
                        <Button key={tracon.name} variant="contained"
                                onClick={() => router.replace(`/tracon/${tracon.config.id}`)}>{tracon.name} TRACON</Button>
                    ))}
                </Stack>
            </Stack>
        </>

    );
}

export default FacilityPicker;