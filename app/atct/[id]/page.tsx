"use client";
import React from 'react';
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import {CircularProgress, Container, Grid} from "@mui/material";
import DepartureGatesInformation, {
    DetailedTraconArea
} from "@/components/Airport/DepartureGates/DepartureGatesInformation";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";
import {useAutoRefresh} from "@/hooks/useAutoRefresh";
import {fetchAirportData} from "@/actions/airport";
import {Prisma} from "@prisma/client";
import {VatsimATISConnection} from "@/types";
import ChangeSnackbar from "@/components/ChangeAnnouncer/ChangeSnackbar";
import {getAtctChanges} from "@/lib/atct";

const airportWithRelations = Prisma.validator<Prisma.AirportDefaultArgs>()({
    include: {
        runways: true,
        activeFlow: {
            include: {
                departureRunways: true,
                arrivalRunways: true,
                traconVisibleOptions: true,
            },
        },
        departureGateAssignments: {
            include: {
                sector: true,
            },
        },
        localRunwayAssignments: true,
        parentMajorTraconAreas: {
            include: {
                parentTracon: {
                    include: {
                        sectors: true,
                    },
                },
            },
        },
        parentMinorTraconAreas: {
            include: {
                parentTracon: {
                    include: {
                        sectors: true,
                    },
                },
            },
        },
    },
});

export type DetailedAirport = Prisma.AirportGetPayload<typeof airportWithRelations>;

export type AirportData = {
    icao: string,
    metar: string | undefined,
    atis: VatsimATISConnection | undefined,
    airport: DetailedAirport,
}

function AtctHome({ params }: { params: { id: string, }, }) {

    const { id } = params;

    const [data, changes, removeChanges] =
        useAutoRefresh<AirportData>(15000, () => fetchAirportData(id), getAtctChanges);

    if (!data) {
        return <CircularProgress />;
    }

    let parentArea: DetailedTraconArea;
    if (data.airport?.parentMajorTraconAreas && data.airport?.parentMajorTraconAreas.length > 0) {
        // noinspection JSPotentiallyInvalidTargetOfIndexedPropertyAccess
        parentArea = data.airport?.parentMajorTraconAreas[0];
    } else {
        parentArea = data.airport?.parentMinorTraconAreas[0];
    }

    return (
        <Container maxWidth="xl">
            { changes.map((c, idx) => (
                <ChangeSnackbar key={idx} open={true} change={c} onAcknowledge={() => removeChanges([c])} />
            ))}
            <div>
                <AirportOverview airportData={data} />
            </div>
            <Grid container columns={2}>
                <Grid item xs={2} lg={1}>
                    <BroadcastPirepGrid />
                </Grid>
                <Grid item xs={2} lg={1}>
                    <div>
                        <DepartureGatesInformation airportData={data} parentTraconArea={parentArea} />
                        <LocalRunwayAssignment airportData={data} />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AtctHome;