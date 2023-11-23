import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";

function EmergencyChecklistTab() {

    return (
        <>
            <Typography variant="h3" color="red">EMERGENCY CHECKLIST</Typography>
            <Typography variant="h6" color="red" sx={{ textDecoration: 'underline', }}>!! Do not close this window or switch to a different IDS tab !!</Typography>
            <Typography>To access other IDS features, open a new IDS tab.  If you leave this checklist, all changes will be lost.</Typography>
            <TextField multiline label="NOTES (press Enter for new line)" color="info" fullWidth />
            <FormGroup>
                <Typography variant="h6">Start assistance as soon as enough information has been obtained upon which to act. Information requirements will vary, depending on the existing situation. Minimum required information for inflight emergencies is:</Typography>
                <FormControlLabel control={<Checkbox />} label="Aircraft identification and type." />
                <FormControlLabel control={<Checkbox />} label="Nature of the emergency." />
                <FormControlLabel control={<Checkbox />} label="Pilot's desires." />
                <br/>
                <Typography variant="h6">After initiating action, obtain the following items or any other pertinent information from the pilot or aircraft operator, as necessary:</Typography>
                <FormControlLabel control={<Checkbox />} label="Aircraft altitude." />
                <FormControlLabel control={<Checkbox />} label="Fuel remaining in time." />
                <FormControlLabel control={<Checkbox />} label="Pilot reported weather." />
                <FormControlLabel control={<Checkbox />} label="Pilot capability for IFR flight." />
                <FormControlLabel control={<Checkbox />} label="Time and place of last known position." />
                <FormControlLabel control={<Checkbox />} label="Heading since last known position." />
                <FormControlLabel control={<Checkbox />} label="Airspeed." />
                <FormControlLabel control={<Checkbox />} label="Navigation equipment capability." />
                <FormControlLabel control={<Checkbox />} label="NAVAID signals received." />
                <FormControlLabel control={<Checkbox />} label="Visible landmarks." />
                <FormControlLabel control={<Checkbox />} label="Aircraft color." />
                <FormControlLabel control={<Checkbox />} label="Number of people on board." />
                <FormControlLabel control={<Checkbox />} label="Point of departure and destination." />
                <FormControlLabel control={<Checkbox />} label="Emergency equipment on board." />
            </FormGroup>
        </>
    );
}

export default EmergencyChecklistTab;