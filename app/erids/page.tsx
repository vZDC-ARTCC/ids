"use client";
import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import {fetchAllAirports} from "@/actions/airport";
import AirportTable from "@/components/Table/AirportTable";
import {fetchEnrouteData} from "@/actions/enroute";
import EnrouteSectorsList from "@/components/Enroute/EnrouteSectorsList";
import {sortPriorityAirports} from "@/lib/enroute";
import {Airport, Prisma} from "@prisma/client";
import EnrouteDefaultArgs = Prisma.EnrouteDefaultArgs;
import {useAutoRefresh} from "@/hooks/useAutoRefresh";
import EnrouteSectorAssignmentDefaultArgs = Prisma.EnrouteSectorAssignmentDefaultArgs;
import {getRadarChanges} from "@/lib/radar";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";

const enrouteWithRelations = Prisma.validator<EnrouteDefaultArgs>()({
    include: {
        priorityAirports: true,
        sectors: true,
        presets: {
            include: {
                sectors: true,
            },
        },
    },
});

const enrouteAssignmentWithRelations = Prisma.validator<EnrouteSectorAssignmentDefaultArgs>()({
    include: {
        parentSector: true,
        childSectors: true,
    },
});

export type DetailedEnrouteSectorAssignment = Prisma.EnrouteSectorAssignmentGetPayload<typeof enrouteAssignmentWithRelations>;

export type DetailedEnroute = Prisma.EnrouteGetPayload<typeof enrouteWithRelations>;

export type EnrouteData = {
    enroute: DetailedEnroute,
    splits: DetailedEnrouteSectorAssignment[],
}
function EridsPage() {

    const [airports, setAirports] = useState<Airport[]>([]);
    const [data, changes, removeChanges] = useAutoRefresh<EnrouteData>(15000, () => fetchEnrouteData(), getRadarChanges);

    useEffect(() => {
        fetchAllAirports().then(setAirports);
    }, [])

    return data && (
        <Grid container columns={4}>
            { changes.map((c, idx) => (
                <ChangeSnackbar key={idx} open={true} change={c} onAcknowledge={() => removeChanges([c])} />
            ))}
            <Grid item xs={4} lg={1}>
                <BroadcastPirepGrid />
            </Grid>
            <Grid item xs={4} lg={1} sx={{ border: 1, }}>
                <AirportTable airports={sortPriorityAirports(airports, data.enroute.priorityAirports)} />
            </Grid>
            <Grid item xs={4} lg>
                <EnrouteSectorsList enrouteData={data} />
            </Grid>
        </Grid>
    );
}

export default EridsPage;