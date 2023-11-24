import React from 'react';
import {Broadcast} from "@prisma/client";
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import BroadcastDeleteButton from "@/components/Broadcast/BroadcastDeleteButton";

function BroadcastList({ broadcasts, big = false, deleteButton = false, }: { broadcasts: Broadcast[], big?: boolean, deleteButton?: boolean, }) {

    return (
        <List sx={{ width: '100%', }}>
            { broadcasts.length === 0 && <Typography>No active broadcasts</Typography> }
            {broadcasts.map((broadcast) => (
                <ListItem key={broadcast.id} secondaryAction={
                    <>
                        { deleteButton && <BroadcastDeleteButton broadcastId={broadcast.id} /> }
                    </>
                }>
                    { big && <Typography variant="h4" color="orange" sx={{ padding: 1, border: 1, }}>{broadcast.message}</Typography>}
                    { !big && <ListItemText primary={broadcast.message} /> }
                </ListItem>
            ))}
        </List>
    );
}

export default BroadcastList;