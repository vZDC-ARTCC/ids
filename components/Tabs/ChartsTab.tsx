"use client";
import React, {useEffect, useState} from 'react';
import {Chart} from "@/types";
import {Button, ButtonGroup, CircularProgress, Stack, Typography} from "@mui/material";

function ChartsTab({ icao }: { icao: string, }) {
    const [charts, setCharts] = useState<Chart[]>();

    const fetchCharts = async (icao: string) => {
        const res = await fetch(`/api/charts/${icao}`, {
            next: {
                revalidate: 3600,
            }
        });
        const data: Chart[] = await res.json();
        return data;
    }

    useEffect(() => {
        fetchCharts(icao).then(setCharts);
    }, [icao]);

    return (
        <>
            { !charts && <CircularProgress color="primary" /> }
            <Stack direction="row" spacing={10} justifyContent="center" flexWrap="wrap">
                { charts && getUniqueCategories(charts).map((category) =>
                    (
                        <ButtonGroup key={category} orientation="vertical" size="large" variant="outlined">
                            <Typography variant="h4" textAlign="center" sx={{ marginBottom: '1rem', }}>{category}</Typography>
                            { charts.filter((chart) => chart.category === category).map((chart) => (
                                <Button key={chart.name} color="inherit" target="_blank" href={chart.url}>{chart.name}</Button>
                            )) }
                        </ButtonGroup>
                    )
                )}
            </Stack>
        </>
    );
}

function getUniqueCategories(charts: Chart[]): string[] {
    const uniqueCategories: string[] = [];
    charts.forEach((chart) => {
        if (!uniqueCategories.includes(chart.category)) {
            uniqueCategories.push(chart.category);
        }
    });
    return uniqueCategories;
}

export default ChartsTab;