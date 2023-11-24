import React, {ReactNode} from 'react';
import {Box} from "@mui/material";

function IdsTab({ children }: { children: ReactNode }) {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem 2rem 2rem 7rem',
            gap: '1rem',
        }}>
            <>
                {children}
            </>
        </Box>
    );
}

export default IdsTab;