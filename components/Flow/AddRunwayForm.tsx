"use client";
import React, {useEffect, useState} from 'react';
import {Runway} from "@prisma/client";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent, Stack
} from "@mui/material";
import {Add} from "@mui/icons-material";

function AddRunwayForm({ runways, getTypes, onSubmit }: { runways: Runway[], getTypes: (runwayId: string) => string[], onSubmit: (runwayId: string, types: string[]) => void }) {

    const [selectedRunwayId, setSelectedRunwayId] = useState<string>('');
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    useEffect(() => {
        setSelectedTypes([]);
    }, [selectedRunwayId])
    const changeTypes = (e: SelectChangeEvent<typeof selectedTypes>) => {
        const { target: { value }} = e;
        setSelectedTypes(
            typeof  value === 'string' ? value.split(',') : value,
        );
    }

    const submit = () => {
        if (!selectedRunwayId || !selectedTypes || selectedTypes.length === 0) {
            alert('Please make sure all fields are filled.');
            return;
        }
        else {
            onSubmit(selectedRunwayId, selectedTypes);
            setSelectedRunwayId('');
            setSelectedTypes([]);
        }
    }

    return (
        <Stack direction={{ xs: 'column', md: 'row', }} spacing={2}>
            <FormControl fullWidth>
                <InputLabel>Runway</InputLabel>
                <Select
                    value={selectedRunwayId}
                    label="Runway"
                    onChange={(e) => setSelectedRunwayId(e.target.value)}
                >
                    {runways.map((rwy) => (
                        <MenuItem key={rwy.id} value={rwy.id}>{rwy.runwayNumber}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Usage (select runway first)</InputLabel>
                <Select
                    multiple
                    disabled={!selectedRunwayId}
                    value={selectedTypes}
                    onChange={changeTypes}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {selectedRunwayId && getTypes(selectedRunwayId).map((type) => (
                        <MenuItem key={type} value={type}>
                            <Checkbox checked={selectedTypes.indexOf(type) > -1} />
                            <ListItemText primary={type} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box>
                <Button variant="contained" size="medium" startIcon={<Add />} onClick={() => submit()}>Add runway</Button>
            </Box>
        </Stack>
    );
}

export default AddRunwayForm;