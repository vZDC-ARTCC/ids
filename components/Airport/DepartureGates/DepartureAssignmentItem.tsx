"use client";
import React, {useState} from 'react';
import {DepartureGatesAssignment} from "@prisma/client";
import {
    Box, Button,
    Checkbox,
    IconButton,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Typography
} from "@mui/material";
import {ArrowForward, Delete, Edit} from "@mui/icons-material";
import {deleteAssignment, updateAssignment} from "@/actions/departureGate";
import {useRouter} from "next/navigation";

function DepartureAssignmentItem({ departureAssignment, allDepartureGates, onDelete }: { departureAssignment: DepartureGatesAssignment | any, allDepartureGates: string[], onDelete: () => void, }) {

    const [edit, setEdit] = useState(false);
    const [selectedDepartureGates, setSelectedDepartureGates] = useState(departureAssignment.gates);
    const router = useRouter();

    const onDeleteAssignment = async () => {
        await deleteAssignment(departureAssignment.id);
        onDelete();
    };

    const changeDepartureGates = (e: SelectChangeEvent<typeof selectedDepartureGates>) => {
        const { target: { value }} = e;
        if ((typeof value === 'string' && value === 'everything') ||
        value.includes('everything')) {
            if (allDepartureGates.every(v => selectedDepartureGates.includes(v))) {
                setSelectedDepartureGates([]);
                return;
            }
            setSelectedDepartureGates([...allDepartureGates]);
            return;
        }
        setSelectedDepartureGates(
            typeof  value === 'string' ? value.split(',') : value,
        );

    }

    const saveDepartureAssignment = async () => {
        if (!selectedDepartureGates || selectedDepartureGates.length === 0) {
            alert('You must select at least one departure gate.  If you want to remove the sector, then press the delete button.');
            return;
        }

        await updateAssignment(departureAssignment.id, selectedDepartureGates);
        setEdit(false);
        window.location.reload();
    }
    
    return (
        <ListItem disableGutters secondaryAction={
            <Box>
                <IconButton onClick={() => setEdit(!edit)}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => onDeleteAssignment()}>
                    <Delete />
                </IconButton>
            </Box>
        }>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h5" color="deepskyblue" fontWeight={600} textAlign="center" sx={{ padding: 1, border: 1, minWidth: '5rem', }}>{departureAssignment.sector.name}</Typography>
                <ArrowForward fontSize="large" />
                { !edit &&
                    <Stack direction="row" spacing={0} flexWrap="wrap">
                        { allDepartureGates.every(v => departureAssignment.gates.includes(v)) && <Typography variant="h3" fontWeight={600} color="limegreen">ALL</Typography> }
                        { !allDepartureGates.every(v => departureAssignment.gates.includes(v)) && departureAssignment.gates.map((gate: string) => (
                            <Typography key={gate} color="limegreen" fontWeight={600} sx={{ padding: 0.5, }}>{gate}</Typography>
                        ))}
                    </Stack> }
                { edit &&
                    <Stack direction="row" spacing={1}>
                        <Select
                            multiple
                            disabled={!edit}
                            value={selectedDepartureGates}
                            onChange={changeDepartureGates}
                            renderValue={(selected) => `${selected.length} selected`}
                        >
                            <MenuItem value="everything">
                                <Checkbox checked={allDepartureGates.every(v => selectedDepartureGates.includes(v))} />
                                <ListItemText primary="Select All" />
                            </MenuItem>
                            {allDepartureGates.map((gate) => (
                                <MenuItem key={gate} value={gate}>
                                    <Checkbox checked={selectedDepartureGates.indexOf(gate) > -1} />
                                    <ListItemText primary={gate} />
                                </MenuItem>
                            ))}
                        </Select>
                        <Button variant="contained" onClick={() => saveDepartureAssignment().then(() => router.refresh())}>Save</Button>
                        <Button variant="contained" onClick={() => {
                            setEdit(false);
                            setSelectedDepartureGates(departureAssignment.gates);
                        }}>Cancel</Button>
                    </Stack>
                }
            </Stack>
        </ListItem>
    );
}

export default DepartureAssignmentItem;