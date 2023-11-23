"use client";
import React from 'react';
import {deletePirep} from "@/actions/pirep";
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {useRouter} from "next/navigation";

function PirepDeleteButton({ pirepId }: { pirepId: string, }) {

    const router = useRouter();
    const onDeletePirep = (id: string) => {
        deletePirep(id).then(() => {
            router.refresh();
        })
    }

    return (
        <IconButton edge="end" onClick={() => onDeletePirep(pirepId)}>
            <Delete />
        </IconButton>
    );
}

export default PirepDeleteButton;