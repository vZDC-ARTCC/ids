"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {EnrouteSector, TraconSector} from "@prisma/client";
import {ListItemText, MenuItem, Select} from "@mui/material";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

function AirspaceSelect({ initialSelectedSector, sectors, }: { initialSelectedSector?: TraconSector | EnrouteSector, sectors: TraconSector[] | EnrouteSector[], }) {

    const [selectedSector, setSelectedSector] = useState<TraconSector | EnrouteSector | any>(initialSelectedSector || {});
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    
    useEffect(() => {
        if (selectedSector) {
            router.push(pathname + '?' + createQueryString('sectorId', selectedSector.id), {
                scroll: true,
            });
        }
    }, [selectedSector, createQueryString, router, pathname]);

    return (
        <Select
            required
            fullWidth
            sx={{ minWidth: '10rem', }}
            value={selectedSector}
            renderValue={(v: TraconSector) => v.name}
            onChange={(e) => setSelectedSector(e.target.value as TraconSector)}
        >
            {sectors.map((sector) => (
                <MenuItem key={sector.id} value={sector as any}>
                    <ListItemText primary={sector.name} />
                </MenuItem>
            ))}
        </Select>
    );
}

export default AirspaceSelect;