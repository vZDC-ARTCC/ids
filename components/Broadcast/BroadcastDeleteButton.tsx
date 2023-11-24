"use client";
import React from 'react';
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {deleteBroadcast} from "@/actions/broadcast";
import {useRouter} from "next/navigation";

function BroadcastDeleteButton({ broadcastId }: { broadcastId: string, }) {

    const router = useRouter();
    const onDeleteBroadcast = (id: string) => {
        deleteBroadcast(id).then(() => {
            router.refresh();
        });
    };

    return (
        <IconButton edge="end" onClick={() => onDeleteBroadcast(broadcastId)}>
            <Delete />
        </IconButton>
    );
}

export default BroadcastDeleteButton;