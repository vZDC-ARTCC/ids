import React, {useState} from 'react';
import {
    Button,
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
import {ArrowForward, Edit} from "@mui/icons-material";
import {createAssignment, updateAssignment} from "@/actions/runwayAssignment";

function LocalRunwayAssignmentItem({ icao, position, runways, availableRunways, id, changeEdit }: { icao: string, position: string, runways: string[], availableRunways: string[], id?: string, changeEdit: (value: boolean) => void, }) {

    const [edit, setEdit] = useState(false);
    const [selectedRunways, setSelectedRunways] = useState<string[]>(runways);
    const updateEdit = (value: boolean) => {
        setEdit(value);
        changeEdit(value);
    }

    const changeSelectedRunways = (e: SelectChangeEvent<typeof selectedRunways>) => {
        const { target: { value }} = e;
        setSelectedRunways(
            typeof  value === 'string' ? value.split(',') : value,
        );
    }

    const saveLocalAssignment = async () => {
        if (!selectedRunways) {
            alert('An error occurred');
            return;
        }
        if (!id) {
            await createAssignment(icao, position, selectedRunways);
        } else {
            await updateAssignment(id, icao, position, selectedRunways);
        }
        updateEdit(false);
    }

    return (
        <ListItem secondaryAction={
            <IconButton onClick={() => updateEdit(!edit)}>
                <Edit />
            </IconButton>
        }>
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h4" color="turquoise" fontWeight={700} sx={{ minWidth: '4rem', }}>{position}</Typography>
                <ArrowForward fontSize="large" />
                { !edit && runways.length === 0 && <Typography color="red">CLOSED</Typography> }
                { !edit && runways.length > 0 &&
                    <Stack direction="row">
                        {runways.map((rwy) => <Typography key={rwy} variant="h5" color="lawngreen" fontWeight={700} sx={{ padding: 1, }}>{rwy}</Typography>)}
                    </Stack>
                }
            </Stack>
            { edit &&
                <Stack direction="row" spacing={2}>
                    <Select
                        multiple
                        disabled={!edit}
                        value={selectedRunways}
                        onChange={changeSelectedRunways}
                        renderValue={(selected) => `${selected.length} selected`}
                    >
                        {availableRunways.map((rwy) => (
                            <MenuItem key={rwy} value={rwy}>
                                <Checkbox checked={selectedRunways.indexOf(rwy) > -1} />
                                <ListItemText primary={rwy} />
                            </MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" onClick={() => saveLocalAssignment()}>Save</Button>
                    <Button variant="contained" onClick={() => {
                        updateEdit(false);
                        setSelectedRunways(runways);
                    }}>Cancel</Button>
                </Stack>

            }

        </ListItem>
    );
}

export default LocalRunwayAssignmentItem;