import React, {useState} from 'react';
import {Button, Checkbox, ListItemText, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";
import {Add} from "@mui/icons-material";
import {EnroutePositionPreset, EnrouteSector} from "@prisma/client";
import {createEnrouteAssignment} from "@/actions/enrouteAssignment";

function AddEnrouteAssignmentForm({ sectors, presets, onSubmit }: { sectors: EnrouteSector[], presets: EnroutePositionPreset[] | any[], onSubmit: () => void, }) {
    const [sectorId, setSectorId] = useState<string>('');
    const [childSectorIds, setChildSectorIds] = useState<string[]>([]);


    const changeSectors = (e: SelectChangeEvent<typeof childSectorIds>) => {
        let { target: { value }} = e;
        value = value as string[];
        if (value.includes('ALL')) {
            if (value.length - 1 === sectors.length) {
                setChildSectorIds([]);
                return;
            }
            setChildSectorIds(sectors.map((sector: EnrouteSector) => sector.id));
            return;
        }
        const valuesToSave: string[] = [];
        value.forEach((val) => {
            valuesToSave.push(...val.split(','));
        })
        setChildSectorIds(valuesToSave.filter((val, i) => valuesToSave.indexOf(val) === i));
    }

    const submit = async () => {
        if (!sectorId || !childSectorIds || childSectorIds.length === 0) alert('Make sure all fields are filled.');
        else {
            await createEnrouteAssignment(sectorId, childSectorIds);
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
                            <ListItemText primary={sector.name} />
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
                    <MenuItem value="ALL">
                        <Checkbox checked={sectors.every(v => childSectorIds.includes(v.id))} />
                        <ListItemText primary="Select All" />
                    </MenuItem>
                    {presets.map((preset) => (
                        <MenuItem key={preset.id} value={preset.sectors.map((sector: EnrouteSector) => sector.id).join(',')}>
                            <Button variant="contained" size="large" sx={{ width: '100%', }}>{preset.name}</Button>
                        </MenuItem>
                    ))}
                    {sectors.map((sector) => (
                        <MenuItem key={sector.id} value={sector.id}>
                            <Checkbox checked={childSectorIds.indexOf(sector.id) > -1} />
                            <ListItemText primary={sector.name} />
                        </MenuItem>
                    ))}
                </Select>
                <Button variant="contained" startIcon={<Add />} type="submit">Add</Button>
            </Stack>
        </form>
    );
}

export default AddEnrouteAssignmentForm;