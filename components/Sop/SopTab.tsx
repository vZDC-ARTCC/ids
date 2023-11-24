import React from 'react';
import {Typography} from "@mui/material";

function SopTab({ sopLink }: { sopLink: string, }) {
    return (
        <>
            <Typography variant="h3">SOP</Typography>
            <embed src={sopLink} style={{ width: '100%', minHeight: '700px', }}/>
        </>
    );
}

export default SopTab;