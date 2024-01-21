"use client";
import React, {useCallback, useEffect, useState} from 'react';
import {Airport} from "@prisma/client";
import {CircularProgress, Grid} from "@mui/material";
import {AirportChange} from "@/types";
import {fetchAirportsData} from "@/actions/airport";
import AirportOverview from "@/components/Airport/AirportOverview";
import {AirportData} from "@/app/atct/[id]/page";
import {getAtctChanges} from "@/lib/atct";
import {InformationChange} from "@/components/ChangeAnnouncer/information_change";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";

export default TraconAirportView;

function TraconAirportView({ airports, }: { airports: Airport[], }) {

    const [data, setData] = useState<AirportData[]>();
    const [changes, setChanges] = useState<InformationChange[]>([]);

    useEffect(() => {
        fetchAirportsData(airports.map((a) => a.icao)).then((data) => {
            setData((prev) => {
                const newChanges: InformationChange[] = [];
                for (const i of data) {
                    if (prev) {
                        newChanges.push(...getAtctChanges(prev.find((p) => p.icao === i.icao), i));
                    }
                }
                setChanges((prev) => [...prev, ...newChanges]);
                return data;
            })
        });
    }, [airports]);

    if (!data) {
        return <CircularProgress />
    }

    return data && (
        <>
            { changes.map((c, idx) => (
                <ChangeSnackbar key={idx} open={true} change={c} onAcknowledge={() => setChanges(changes.filter((sc) => sc !== c))} />
            ))}
            {data.map((d) => (
                <Grid key={d.icao} item xs sx={{ border: 1, }}>
                    <AirportOverview airportData={d} condensed />
                    <LocalRunwayAssignment airportData={d} />
                </Grid>
            ))}

        </>
    );
}
