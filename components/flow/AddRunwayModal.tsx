import React, {useEffect, useState} from 'react';
import {Runway} from "@prisma/client";
import {Autocomplete, Box, Button, Modal, Stack, TextField, Typography} from "@mui/material";
import {AvailableRunway} from "@/types";

function AddRunwayModal({ runways, departure, open, onClose, onSubmit }: { runways: Runway[], departure: boolean, open: boolean, onClose: () => void, onSubmit: (runway: AvailableRunway) => void }) {

    const [selectedRunwayNumber, setSelectedRunwayNumber] = useState('');
    const [availableTypes, setAvailableTypes] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const runwayNumbers = runways.map((runway) => runway.runwayNumber);

    useEffect(() => {
        const runway = runways.find((runway) => runway.runwayNumber === selectedRunwayNumber);
        setSelectedTypes([]);
        if (departure) {
            setAvailableTypes(runway?.departureTypes || []);
        } else {
            setAvailableTypes(runway?.approachTypes || []);
        }
        
    }, [departure, runways, selectedRunwayNumber]);

    const submit = () => {
        if (!selectedRunwayNumber) alert("You must select a runway number");
        else if (selectedTypes.length === 0) alert(`You must select at least 1 ${departure ? 'departure' : 'approach'} type`);
        else if (departure) {
            onSubmit({
                id: selectedRunwayNumber,
                availableDepartureTypes: selectedTypes,
            });
        } else {
            onSubmit({
                id: selectedRunwayNumber,
                availableApproachTypes: selectedTypes,
            });
        }
        setSelectedTypes([]);
        setAvailableTypes([]);
        setSelectedRunwayNumber('');
    }

    return runways && (
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
                <Typography variant="h4">Add Runway</Typography>
                <Stack direction="column" spacing={2} sx={{ marginTop: '1rem', }}>
                    <Autocomplete
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Runway"
                            />
                        )}
                        inputValue={selectedRunwayNumber}
                        onInputChange={(event, newInputValue) => {
                            setSelectedRunwayNumber(newInputValue);
                        }}
                        options={runwayNumbers}
                    />
                    <Autocomplete
                        multiple
                        disabled={!selectedRunwayNumber}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label={departure ? 'Departure Types' : 'Approach Types'}
                            />
                        )}
                        value={selectedTypes}
                        onChange={(event, value) => {
                            setSelectedTypes(value);
                        }}
                        options={availableTypes}
                    />
                    <Button variant="contained" onClick={() => submit()}>Add</Button>
                </Stack>

            </Box>
        </Modal>
    );
}

export default AddRunwayModal;