"use client";
import React, {useState} from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import {Pirep, PirepType} from "@prisma/client";
import {createPirep} from "@/actions/pirep";
import {useRouter} from "next/navigation";

function PirepForm() {

    const [pirep, setPirep] = useState<Pirep | any>();
    const router = useRouter();

    const submit = () => {
        const time = pirep.time;
        if (pirep.location.length > 9) {
            alert('Location is invalid');
            return;
        }
        if (time.length !== 4) {
            alert('Time is invalid');
            return;
        }

        const hours = parseInt(time.substring(0, 2), 10);
        const minutes = parseInt(time.substring(2), 10);

        const currentDateTime = new Date();
        currentDateTime.setUTCHours(hours);
        currentDateTime.setUTCMinutes(minutes);
        currentDateTime.setUTCSeconds(0);
        currentDateTime.setUTCMilliseconds(0);

        createPirep({ ...pirep, time: currentDateTime.toISOString(), }).then(() => {
            setPirep(undefined);
            router.refresh();
        })
    };

    return (
        <Box>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit();
            }}>
                <Stack direction="column" spacing={2}>
                    <FormControl fullWidth required>
                        <InputLabel id="pirep-urgency-select-label">Urgency</InputLabel>
                        <Select
                            labelId="pirep-urgency-select-label"
                            id="pirep-urgency-select"
                            value={pirep?.urgency || ''}
                            label="Urgency"
                            variant="filled"
                            onChange={(e) => setPirep({ ...pirep, urgency: e.target.value as PirepType, })}
                        >
                            <MenuItem value={PirepType.ROUTINE}>ROUTINE</MenuItem>
                            <MenuItem value={PirepType.URGENT}>URGENT</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        required
                        variant="filled"
                        value={pirep?.location || ''}
                        label="Location"
                        helperText="Use Airport, NAVAID, and fixes (no lat/long). Radial/distance cuts may be entered off of a NAVAID or fix in the format XXXRRRDDD where XXX is the station ID, RRR is the radial, and DDD is the distance (ex. ATL090100). You must enter all 6-digits of the radial and distance."
                        onChange={(e) => setPirep({ ...pirep, location: e.target.value, })}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="filled"
                        value={pirep?.time || ''}
                        label="Time"
                        helperText="When conditions occurred or were encountered (Zulu)"
                        onChange={(e) => setPirep({ ...pirep, time: e.target.value, })}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="filled"
                        value={pirep?.flightLevel || ''}
                        label="Flight Level"
                        helperText="Examples: FL095, FL310, FLUNKN"
                        onChange={(e) => setPirep({ ...pirep, flightLevel: e.target.value, })}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="filled"
                        value={pirep?.aircraftType || ''}
                        label="Aircraft Type"
                        helperText="Examples: P28A, RV8, B738, UNKN"
                        onChange={(e) => setPirep({ ...pirep, aircraftType: e.target.value, })}
                    />
                    <TextField
                        fullWidth
                        multiline
                        required
                        variant="filled"
                        value={pirep?.remarks || ''}
                        label="Flight Conditions / Remarks"
                        helperText="Enter weather conditions (turbulence, icing, windshear) here. For turbulence, use these codes: TB (CAT|CHOP|LLWS|MWAVE) (NEG|SMTH-LGT|LGT|LGT-MOD|MOD|MOD-SEV|SEV|SEV-EXTM|EXTM) (ISOL|OCNL|CONT) For icing, use these codes: IC (RIME|CLEAR|MIXED) (NEG|NEGclr|TRC|TRC-LGT|LGT|LGT-MOD|MOD|MOD-SEV|HVY|SEV) Example: TB CAT LGT OCNL Example: IC MIXED MOD"
                        onChange={(e) => setPirep({ ...pirep, remarks: e.target.value, })}
                    />
                    <Typography>PIREPs expire 1 hour from the time provided.</Typography>
                    <Button variant="contained" type="submit" size="large">Publish</Button>
                </Stack>
            </form>
        </Box>

    );
}

export default PirepForm;