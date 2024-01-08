"use client";
import React, {useState} from 'react';
import {Button, Stack, TextField} from "@mui/material";

function PrdForm({ onSubmit, defaultOriginAirport }: { onSubmit: (origin: string, dest?: string) => Promise<void>, defaultOriginAirport?: string, }) {

    const [origin, setOrigin] = useState<string>(defaultOriginAirport || '');
    const [dest, setDest] = useState('');

    return (
        <form onSubmit={(e) =>
        {
            e.preventDefault();
            onSubmit(origin, dest)
        }}>
            <Stack direction="row" spacing={4}>
                <TextField
                    variant="filled"
                    label="Origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                />
                <TextField
                    variant="filled"
                    label="Destination"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                />
            </Stack>

            <Button type="submit" variant="contained" sx={{ width: '100%', marginTop: '1rem', }}>Search</Button>
        </form>
    );
}

export default PrdForm;