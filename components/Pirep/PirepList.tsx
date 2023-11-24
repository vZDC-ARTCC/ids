import React from 'react';
import {Pirep} from "@prisma/client";
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {formatPirep} from "@/lib/pirep";
import PirepDeleteButton from "@/components/Pirep/PirepDeleteButton";

function PirepList({ pireps, big = false, deleteButton = false, }: { pireps: Pirep[], big?: boolean, deleteButton?: boolean, }) {

    return (
        <List sx={{ width: '100%', }}>
            { pireps.length === 0 && <Typography>No active PIREPs</Typography> }
            { pireps.map((pirep) => (
                <ListItem key={pirep.id} secondaryAction={
                    <>
                        { deleteButton && <PirepDeleteButton pirepId={pirep.id} /> }
                    </>
                }>
                    { big && <Typography variant="h4" color={pirep.urgency === "URGENT" ? 'red' : 'inherit'}>{formatPirep(pirep)}</Typography>}
                    { !big && <ListItemText primary={formatPirep(pirep)} /> }
                </ListItem>
            ))}
        </List>
    );
}

export default PirepList;