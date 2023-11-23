import React from 'react';
import {Typography} from "@mui/material";
import IdsTab from "@/components/Tabs/IdsTab";

function AircraftTypesTab() {
    return (
        <>
            <Typography variant="h3">Aircraft Types</Typography>
            <Typography>Use CTRL+F (or the find key combination) to search for aircraft types.</Typography>
            <embed src="/faa/aircraft_types.pdf" style={{ width: '100%', minHeight: '700px', }}/>
        </>
    );
}

export default AircraftTypesTab;