"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Airport, Runway} from "@prisma/client";
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Modal,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import AddRunwayModal from './AddRunwayModal';
import {AirportFlowConfig, AvailableRunway} from "@/types";
import {Delete} from "@mui/icons-material";

function CustomFlowModal({ icao, open, onClose, onSubmit }: { icao?: string, open: boolean, onClose: () => void, onSubmit: (flow: AirportFlowConfig) => Promise<void> }) {

    const [addDepartureRunwayOpen, setAddDepartureRunwayOpen] = useState(false);
    const [addArrivalRunwayOpen, setAddArrivalRunwayOpen] = useState(false);
    const [availableRunways, setAvailableRunways] = useState<Runway[]>();
    const [selectedDepartureRunways, setSelectedDepartureRunways] = useState<AvailableRunway[]>([]);
    const [selectedArrivalRunways, setSelectedArrivalRunways] = useState<AvailableRunway[]>([]);
    const [name, setName] = useState('');

    const fetchRunways = useCallback(async () => {
        const res = await fetch(`/api/airport?icao=${icao}`);
        const { runways }: { runways: Runway[] } = await res.json();
        return runways;
    }, [icao]);
    
    useEffect(() => {
        fetchRunways().then(setAvailableRunways);
    }, [fetchRunways]);

    const addRunway = (runway: AvailableRunway) => {
        if (addDepartureRunwayOpen) {
            if (selectedDepartureRunways.find((rwy) => rwy.id === runway.id)) {
                alert("Runway is already defined in flow.  If you would like to make changes, then delete the runway");
                return;
            }
            setSelectedDepartureRunways([...selectedDepartureRunways, runway]);
            setAddDepartureRunwayOpen(false);
        } else if (addArrivalRunwayOpen) {
            if (selectedArrivalRunways.find((rwy) => rwy.id === runway.id)) {
                alert("Runway is already defined in flow.  If you would like to make changes, then delete the runway");
                return;
            }
            setSelectedArrivalRunways([...selectedArrivalRunways, runway]);
            setAddArrivalRunwayOpen(false);
        }
    }

    const submit = () => {
        if (!name) alert("You must provide a name");
        else if (selectedDepartureRunways.length === 0) alert("You must provide at least one departure runway");
        else if (selectedArrivalRunways.length === 0) alert("You must provide at least one arrival runway");
        else {
            onSubmit({
                name,
                departureRunways: selectedDepartureRunways,
                arrivalRunways: selectedArrivalRunways,
                traconVisibleOptions: [],
            }).then(() => {
                setSelectedArrivalRunways([]);
                setSelectedDepartureRunways([]);
                setName('');
                setAvailableRunways([]);
            })
        }
    };

    return availableRunways && (
        <>
            <AddRunwayModal runways={availableRunways} departure={true} open={addDepartureRunwayOpen} onClose={() => setAddDepartureRunwayOpen(false)} onSubmit={addRunway}/>
            <AddRunwayModal runways={availableRunways} departure={false} open={addArrivalRunwayOpen} onClose={() => setAddArrivalRunwayOpen(false)} onSubmit={addRunway}/>
            <Modal open={open} onClose={() => onClose()}>
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'inherit',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h4">Add Custom Flow</Typography>
                    <Stack direction="column" spacing={4} sx={{ marginTop: '1rem', }}>
                        <TextField
                            variant="filled"
                            label="Flow Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Stack direction="column" spacing={2}>
                            <Typography textAlign="center" variant="h6">Departure runways</Typography>
                            <List>
                                { selectedDepartureRunways.map((rwy) => (
                                    <ListItem key={rwy.id} secondaryAction={
                                        <IconButton edge="end" onClick={() => setSelectedDepartureRunways(selectedDepartureRunways.filter((arwy) => arwy.id !== rwy.id))}>
                                            <Delete />
                                        </IconButton>
                                    }>
                                        <ListItemText primary={`${rwy.id} (${rwy.availableDepartureTypes})`}/>
                                    </ListItem>
                                ))}
                            </List>
                            <Button variant="outlined" color="inherit" onClick={() => setAddDepartureRunwayOpen(true)}>Add departure runway</Button>
                        </Stack>
                        <Stack direction="column" spacing={2}>
                            <Typography textAlign="center" variant="h6">Arrival runways</Typography>
                            <List>
                                { selectedArrivalRunways.map((rwy) => (
                                    <ListItem key={rwy.id} secondaryAction={
                                        <IconButton edge="end" onClick={() => setSelectedArrivalRunways(selectedArrivalRunways.filter((arwy) => arwy.id !== rwy.id))}>
                                            <Delete />
                                        </IconButton>
                                    }>
                                        <ListItemText primary={`${rwy.id} (${rwy.availableApproachTypes})`}/>
                                    </ListItem>
                                ))}
                            </List>
                            <Button variant="outlined" color="inherit" onClick={() => setAddArrivalRunwayOpen(true)}>Add arrival runway</Button>
                        </Stack>
                        <Button variant="contained" onClick={() => submit()}>Save and Activate</Button>
                    </Stack>

                </Box>
            </Modal>
        </>

    );
}

export default CustomFlowModal;