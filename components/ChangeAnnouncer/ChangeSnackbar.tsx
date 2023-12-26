"use client";
import React, {useEffect, useState} from 'react';
import {InformationChange} from "@/components/ChangeAnnouncer/information_change";
import {Alert, Button, Snackbar} from "@mui/material";

function ChangeSnackbar({ open, change, onAcknowledge }: { open: boolean, change: InformationChange, onAcknowledge: (f: false) => void, }) {

    const [buttonVariant, setButtonVariant] = useState<'outlined' | 'text'>('outlined');
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (open) { 
                if (buttonVariant === 'outlined') {
                    setButtonVariant('text');
                } else {
                    setButtonVariant('outlined');
                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [buttonVariant, open]);
    
    const getPrefixText = (meta: InformationChange): string => {
        switch (meta.type) {
            case "atis": return 'ATIS';
            case "flow": return 'FLOW';
            case "departure_gate_assignment": return 'DEP-GA';
            case "local_runway_assignment": return 'LC-RA';
            case "broadcast": return 'CIC';
            case "pirep": return 'PIREP';
            case "tracon_sectors": return 'SPLIT';
            default: return '';
        }
    }


    return (
        <Snackbar open={open} anchorOrigin={{ horizontal: 'center', vertical: 'top', }} sx={{ zIndex: 9999, }}>
            <Alert action={<Button color="inherit" variant={buttonVariant} onClick={() => onAcknowledge(false)} sx={{ minWidth: 120, }}>ACKNOWLEDGE</Button>} variant="filled" severity="warning" sx={{ width: '100%', }}>
                {getPrefixText(change)} -- {change.message}
            </Alert>
        </Snackbar>
    );
}

export default ChangeSnackbar;