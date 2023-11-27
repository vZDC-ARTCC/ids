"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Button, CircularProgress, Stack} from "@mui/material";
import {useRouter} from "next/navigation";
import {fetchAllFacilities} from "@/actions/facility";

function FacilityPicker() {

    const router = useRouter();
    const [facilities, setFacilities] = useState<{
        tracons: {
            faaIdentifier: string,
            areas: {
                faaIdentifier: string,
                name: string,
            }[]
        }[],
        atcts: {
            icao: string,
            faaIdentifier: string,
        }[]
    }>();

    const fetchFacilities = useCallback(async () => {
        return await fetchAllFacilities();
    }, []);

    useEffect(() => {
        fetchFacilities().then(setFacilities);
    }, [fetchFacilities]);

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center">
                { !facilities && <CircularProgress /> }
                <Stack spacing={2}>
                    {facilities?.atcts.map((atct) => (
                        <Button key={atct.icao} variant="contained"
                                onClick={() => router.replace(`/atct/${atct.icao}`)}>{atct.faaIdentifier} ATCT</Button>
                    ))}
                </Stack>
                <Stack spacing={2}>
                    {facilities?.tracons.map((tracon) => tracon.areas.map((area) => (
                        <Button disabled key={tracon.faaIdentifier + area.faaIdentifier} variant="contained"
                                onClick={() => router.replace(`/tracon/${tracon.faaIdentifier}/${area.faaIdentifier}`)}>{`${tracon.faaIdentifier}-${area.faaIdentifier}`}</Button>
                    )))}
                </Stack>
            </Stack>
        </>

    );
}

export default FacilityPicker;