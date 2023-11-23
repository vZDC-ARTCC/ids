"use client";
import React, {useState} from 'react';
import {CustomizableOption} from "@/types";
import {Autocomplete, Box, Button, Chip, Stack, TextField, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";

function AddOptionForm({ onSubmit }: { onSubmit: (option: CustomizableOption) => void }) {

    const [name, setName] = useState('');
    const [choices, setChoices] = useState<string[]>([]);


    const submit = () => {
        if (!name || name.length === 0) alert('Name is required');
        else if (!choices || choices.length === 0 || choices.filter((c) => c.trim() === '').length > 0) alert('Choices must not be blank.');
        else {
            onSubmit({
                name,
                choices,
            });
            setName('');
            setChoices([]);
        }
    }

    return (
        <Stack direction={{ xs: 'column', md: 'row', }} spacing={2}>
            <TextField
                fullWidth
                variant="filled"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                fullWidth
                variant="filled"
                label="Choices"
                placeholder="Seperate with commas"
                value={choices.join(',')}
                onChange={(e) => setChoices(e.target.value.split(','))}
            />
            <Box>
                <Button variant="contained" size="medium" startIcon={<Add />} onClick={() => submit()}>Add option</Button>
            </Box>
        </Stack>
    );
}

export default AddOptionForm;