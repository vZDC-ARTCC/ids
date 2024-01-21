"use client";
import React from 'react';
import {fetchTraconData} from "@/actions/traconArea";
import {Box, Grid, Typography} from "@mui/material";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import TraconSectorsList from "@/components/Tracon/TraconSectorsList";
import AirportTable from "@/components/Table/AirportTable";
import TraconAirportView from "@/components/Airport/TraconAirportView";
import {Prisma} from "@prisma/client";
import {useAutoRefresh} from "@/hooks/useAutoRefresh";
import TraconSectorAssignmentDefaultArgs = Prisma.TraconSectorAssignmentDefaultArgs;
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {getRadarChanges} from "@/lib/radar";

const traconAreasWithRelations = Prisma.validator<Prisma.TraconAreaDefaultArgs>()({
    include: {
        areaMap: true,
        majorFields: {
            include: {
                flows: {
                    include: {
                        departureRunways: true,
                        arrivalRunways: true,
                    },
                },
            },
        },
        minorFields: {
            include: {
                flows: {
                    include: {
                        departureRunways: true,
                        arrivalRunways: true,
                    },
                },
            },
            orderBy: {
                icao: 'asc',
            },
        },
        parentTracon: {
            include: {
                sectors: {
                    include: {
                        airspaceData: true,
                    }
                },
                presets: {
                    include: {
                        sectors: true,
                    },
                },
            },
        },
    }
});

const traconSectorAssignmentWithRelations = Prisma.validator<TraconSectorAssignmentDefaultArgs>()({
    include: {
        parentSector: true,
        childSectors: true,
    },
});

export type DetailedTraconSectorAssignment = Prisma.TraconSectorAssignmentGetPayload<typeof traconSectorAssignmentWithRelations>;

export type DetailedTraconArea = Prisma.TraconAreaGetPayload<typeof traconAreasWithRelations>;

export type TraconAreaData = {
    id: string,
    area: string,
    splits: DetailedTraconSectorAssignment[],
    traconArea: DetailedTraconArea,
}
function TraconHome({ params }: { params: { id: string, area: string, }}) {

    const { id, area } = params;

    const [data, changes, removeChanges] = useAutoRefresh<TraconAreaData>(15000, () => fetchTraconData(id, area), getRadarChanges);

    return data && data.traconArea.parentTracon && (
        <div>
            { changes.map((c, idx) => (
                <ChangeSnackbar key={idx} open={true} change={c} onAcknowledge={() => removeChanges([c])} />
            ))}
            <Box>
                <TraconSectorsList traconAreaData={data} />
                <Grid container columns={10}>
                    <Grid item xs={10} md={5} xl={3}>
                        <BroadcastPirepGrid />
                    </Grid>
                    <Grid item xs={10} md={5} xl={2} sx={{ border: 1, }}>
                        <Typography variant="h6" sx={{ padding: 1, }}>SATELLITE FIELDS</Typography>
                        <AirportTable airports={data.traconArea?.minorFields} />
                    </Grid>
                    <TraconAirportView airports={data.traconArea?.majorFields || []} />
                </Grid>
            </Box>
        </div>
    );
}

export default TraconHome;