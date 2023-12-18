"use client";
import React, {useState} from 'react';
import {TraconSector, TraconSectorAssignment} from "@prisma/client";
import {useRouter} from "next/navigation";
import {
    Box, Button,
    Checkbox,
    IconButton,
    ListItem, ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack, Tooltip,
    Typography
} from "@mui/material";
import {ArrowForward, Delete, Edit} from "@mui/icons-material";
import {deleteTraconAssignment, updateTraconAssignment} from "@/actions/traconAssignment";

function TraconSectorAssignmentItem({ sectorAssignment, allSectors, onEdit, onDelete }: { sectorAssignment: TraconSectorAssignment | any, allSectors: TraconSector[], onEdit: (value: boolean) => void, onDelete: () => void, }) {
    const [edit, setEdit] = useState(false);
    const [selectedSectorIds, setSelectedSectorIds] = useState(sectorAssignment.childSectors.map((s: TraconSector) => s.id));
    const router = useRouter();

    const changeEdit = (value: boolean) => {
        onEdit(value);
        setEdit(value);
    }

    const onDeleteAssignment = async () => {
        await deleteTraconAssignment(sectorAssignment.id);
        onDelete();
    };

    const changeTraconAssignment = (e: SelectChangeEvent<any>) => {
        const { target: { value }} = e;
        if ((typeof value === 'string' && value === 'everything') ||
            value.includes('everything')) {
            if (allSectors.every(v => selectedSectorIds.includes(v.id))) {
                setSelectedSectorIds([]);
                return;
            }
            setSelectedSectorIds([...allSectors.map((s: TraconSector) => s.id)]);
            return;
        }
        setSelectedSectorIds(
            typeof  value === 'string' ? value.split(',') : value,
        );
    }

    const saveTraconAssignment = async () => {
        await updateTraconAssignment(sectorAssignment.id, selectedSectorIds);
        changeEdit(false);
    }

    return (
        <ListItem disableGutters secondaryAction={
            <Box>
                <IconButton onClick={() => changeEdit(!edit)}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => onDeleteAssignment()}>
                    <Delete />
                </IconButton>
            </Box>
        }>
            <Stack direction="row" alignItems="center" spacing={2}>
                { !edit &&
                    <Stack direction="row" spacing={0} flexWrap="wrap">
                        { allSectors.every(v => sectorAssignment.childSectors.map((s: TraconSector) => s.id).includes(v.id)) && <Typography variant="h3" fontWeight={600} color="limegreen">ALL</Typography> }
                        { !allSectors.every(v => sectorAssignment.childSectors.map((s: TraconSector) => s.id).includes(v.id)) && sectorAssignment.childSectors.map((sector: TraconSector) => (
                            <Typography key={sector.id} color="limegreen" fontWeight={600} sx={{ padding: 0.5, }}>{sector.name}</Typography>
                        ))}
                        { !allSectors.every(v => sectorAssignment.childSectors.map((s: TraconSector) => s.id).includes(v.id)) && sectorAssignment.childSectors.length === 0 &&
                            <Tooltip title="DO NOT HANDOFF TO THIS SECTOR! No airspace is currently assigned to this sector.">
                                <Typography color="yellow" variant="h5" fontWeight={600}>PARKED</Typography>
                            </Tooltip>
                        }
                    </Stack> }
                { edit &&
                    <Stack direction="row" spacing={1}>
                        <Select
                            multiple
                            disabled={!edit}
                            value={selectedSectorIds}
                            onChange={changeTraconAssignment}
                            renderValue={(selected) => `${selected.length} selected`}
                        >
                            <MenuItem value="everything">
                                <Checkbox checked={allSectors.every(v => selectedSectorIds.includes(v.id))} />
                                <ListItemText primary="Select All" />
                            </MenuItem>
                            {allSectors.map((sector) => (
                                <MenuItem key={sector.id} value={sector.id}>
                                    <Checkbox checked={selectedSectorIds.indexOf(sector.id) > -1} />
                                    <ListItemText primary={`(${sector.sectorLetter}) ${sector.name}`} />
                                </MenuItem>
                            ))}
                        </Select>
                        <Button variant="contained" onClick={() => saveTraconAssignment().then(() => router.refresh())}>Save</Button>
                        <Button variant="contained" onClick={() => {
                            changeEdit(false);
                            setSelectedSectorIds(sectorAssignment.childSectors.map((s: TraconSector) => s.id));
                        }}>Cancel</Button>
                    </Stack>
                }
                <ArrowForward fontSize="large" />
                <Typography variant="h5" color="red" fontWeight={600} textAlign="center" sx={{ padding: 1, border: 1, minWidth: '5rem', }}>{sectorAssignment.parentSector.name}</Typography>
            </Stack>
        </ListItem>
    );
}

export default TraconSectorAssignmentItem;