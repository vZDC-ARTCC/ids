import React, {useState} from 'react';
import {Button, Checkbox, ListItemText, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";
import {createAssignment} from "@/actions/departureGate";
import {Add} from "@mui/icons-material";
import {TraconSector} from "@prisma/client";
import {createTraconAssignment} from "@/actions/traconAssignment";

function AddTraconAssignmentForm({ faaIdentifier, sectors, onSubmit }: { faaIdentifier: string, sectors: TraconSector[], onSubmit: () => void, }) {
    const [sectorId, setSectorId] = useState<string>('');
    const [childSectorIds, setChildSectorIds] = useState<string[]>([]);


    const changeSectors = (e: SelectChangeEvent<typeof childSectorIds>) => {
        const { target: { value }} = e;
        setChildSectorIds(
            typeof  value === 'string' ? value.split(',') : value,
        );
    }

    const submit = async () => {
        if (!sectorId || !childSectorIds || childSectorIds.length === 0) alert('Make sure all fields are filled.');
        else {
            await createTraconAssignment(faaIdentifier, sectorId, childSectorIds);
            onSubmit();
            setSectorId('');
            setChildSectorIds([]);
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
                    value={childSectorIds}
                    onChange={changeSectors}
                    renderValue={(selected) => `${selected.length} selected`}
                >
                    {sectors.map((sector) => (
                        <MenuItem key={sector.id} value={sector.id}>
                            <Checkbox checked={childSectorIds.indexOf(sector.id) > -1} />
                            <ListItemText primary={`(${sector.sectorLetter}) ${sector.name}`} />
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" startIcon={<Add />} type="submit">Add</Button>
            </Stack>
        </form>
    );
}

export default AddTraconAssignmentForm;