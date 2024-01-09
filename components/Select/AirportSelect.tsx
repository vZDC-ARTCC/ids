"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {ListItemText, MenuItem, Select} from "@mui/material";

function AirportSelect({ initialSelectedIcao, airportIcaos, }: { initialSelectedIcao?: string, airportIcaos: string[], }) {
    const [selectedIcao, setSelectedIcao] = useState<string | undefined>(initialSelectedIcao);
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
        if (selectedIcao) {
            router.push(pathname + '?' + createQueryString('icao', selectedIcao), {
                scroll: true,
            });
        }
    }, [selectedIcao, createQueryString, router, pathname]);

    return (
        <Select
            required
            fullWidth
            sx={{ minWidth: '10rem', }}
            value={selectedIcao}
            onChange={(e) => setSelectedIcao(e.target.value as string)}
        >
            {airportIcaos.map((icao) => (
                <MenuItem key={icao} value={icao}>
                    <ListItemText primary={icao} />
                </MenuItem>
            ))}
        </Select>
    );
}

export default AirportSelect;