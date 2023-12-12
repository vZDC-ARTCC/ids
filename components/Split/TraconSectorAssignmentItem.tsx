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
    Stack,
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
        setSelectedSectorIds(
            typeof  value === 'string' ? value.split(',') : value,
        );
    }

    const saveTraconAssignment = async () => {
        if (!selectedSectorIds || selectedSectorIds.length === 0) {
            alert('You must select at least one sector.  If you want to remove the sector, then press the delete button.');
            return;
        }

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
                <Typography variant="h5" color="deepskyblue" fontWeight={600} textAlign="center" sx={{ padding: 1, border: 1, minWidth: '5rem', }}>{sectorAssignment.parentSector.name}</Typography>
                <ArrowForward fontSize="large" />
                { !edit &&
                    <Stack direction="row" spacing={0} flexWrap="wrap">
                        {sectorAssignment.childSectors.map((sector: TraconSector) => (
                            <Typography key={sector.id} color="limegreen" fontWeight={600} sx={{ padding: 0.5, }}>{sector.name}</Typography>
                        ))}
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
            </Stack>
        </ListItem>
    );
}

export default TraconSectorAssignmentItem;