"use client"
import React, {useState} from 'react';
import {TraconSector} from "@prisma/client";
import {Button, Checkbox, ListItemText, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";
import {Add} from "@mui/icons-material";
import {createAssignment} from "@/actions/departureGate";

function AddAssignmentForm({ icao, departureGates, sectors, onSubmit }: { icao: string, departureGates: string[], sectors: TraconSector[], onSubmit: () => void, }) {

    const [sectorId, setSectorId] = useState<string>('');
    const [gates, setGates] = useState<string[]>([]);


    const changeGates = (e: SelectChangeEvent<typeof gates>) => {
        const { target: { value }} = e;
        setGates(
            typeof  value === 'string' ? value.split(',') : value,
        );
    }

    const submit = async () => {
        if (!sectorId || !gates || gates.length === 0) alert('Make sure all fields are filled.');
        else {
            await createAssignment(icao, sectorId, gates);
            onSubmit();
            setSectorId('');
            setGates([]);
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            submit();
        }}>
            <Stack direction="row" spacing={2} sx={{ marginTop: '1rem', }}>
                <Select
                    required
                    sx={{ minWidth: '10rem', }}
                    value={sectorId}
                    onChange={(e) => setSectorId(e.target.value)}
                    renderValue={(selected) => sectors.find((sector) => sector.id === selected)?.name}
                >
                    {sectors.map((sector) => (
                        <MenuItem key={sector.id} value={sector.id}>
                            <ListItemText primary={`(${sector.sectorLetter}) ${sector.name}`} />
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    required
                    fullWidth
                    multiple
                    value={gates}
                    onChange={changeGates}
                    renderValue={(selected) => `${selected.length} selected`}
                >
                    {departureGates.map((gate) => (
                        <MenuItem key={gate} value={gate}>
                            <Checkbox checked={gates.indexOf(gate) > -1} />
                            <ListItemText primary={gate} />
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" startIcon={<Add />} type="submit">Add</Button>
            </Stack>
        </form>
    );
}

export default AddAssignmentForm;