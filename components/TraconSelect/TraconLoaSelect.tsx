"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {LoaData} from "@prisma/client";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ListItemText, MenuItem, Select} from "@mui/material";

function TraconLoaSelect({initialLoa, loas, }: { initialLoa?: LoaData, loas: LoaData[], },) {
    const [selectedLoaId, setSelectedLoaId] = useState<string | undefined>(initialLoa?.id);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const createQueryString = useCallback(
        (loaId: string) => {
            const params = new URLSearchParams(searchParams)
            params.set('selectedLoa', loaId)

            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        if (selectedLoaId) {
            router.push(pathname + '?' + createQueryString(selectedLoaId), {
                scroll: true,
            });
        }
    }, [selectedLoaId, createQueryString, router, pathname]);

    return (
        <Select
            required
            fullWidth
            sx={{ minWidth: '10rem', }}
            value={selectedLoaId}
            onChange={(e) => setSelectedLoaId(e.target.value as string)}
        >
            {loas.map((loa) => (
                <MenuItem key={loa.id} value={loa.id}>
                    <ListItemText primary={loa.targetFacility} />
                </MenuItem>
            ))}
        </Select>
    );
}


export default TraconLoaSelect;