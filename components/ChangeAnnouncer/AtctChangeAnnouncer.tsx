"use client";
import React, {useEffect, useState} from 'react';
import {Airport, AirportFlow, Broadcast, DepartureGatesAssignment, Pirep, TowerRunwayAssignment} from "@prisma/client";
import {InformationChange} from "@/components/ChangeAnnouncer/information_change";
import {VatsimATISConnection} from "@/types";
import {fetchVatsimATIS} from "@/actions/atis";
import {fetchActiveFlow} from "@/actions/flow";
import {fetchDepartureGateAssignments} from "@/actions/departureGate";
import {fetchLocalRunwayAssignments} from "@/actions/runwayAssignment";
import {fetchBroadcasts} from "@/actions/broadcast";
import {fetchPireps} from "@/actions/pirep";
import {AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

function AtctChangeAnnouncer({ airport }: { airport: Airport }) {

    const [changes, setChanges] = useState<InformationChange[]>([]);
    const [atis, setAtis] = useState<VatsimATISConnection>();
    const [activeFlow, setActiveFlow] = useState<AirportFlow | any>();
    const [departureGateAssignments, setDepartureGateAssignments] = useState<DepartureGatesAssignment[]>([]);
    const [localRunwayAssignments, setLocalRunwayAssignments] = useState<TowerRunwayAssignment[]>([]);
    const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
    const [pireps, setPireps] = useState<Pirep[]>([]);

    // fetchVatsimATIS(airport.icao).then(setAtis);
    // fetchActiveFlow(airport.icao).then(setActiveFlow);
    // fetchDepartureGateAssignments(airport.icao).then(setDepartureGateAssignments);
    // fetchLocalRunwayAssignments(airport.icao).then(setLocalRunwayAssignments);
    // fetchBroadcasts().then(setBroadcasts);
    // fetchPireps().then(setPireps);

    useEffect(() => {

        const changesInterval = setInterval(() => {
            fetchVatsimATIS(airport.icao).then((newAtis) => {
                if (newAtis?.last_updated !== atis?.last_updated) {
                    if (!newAtis) {
                        setChanges([...changes, { type: "atis", message: `OFFLINE`, }]);
                    } else {
                        setChanges([...changes, { type: "atis", message: newAtis.atis_code, }]);
                    }
                }
                setAtis(newAtis);
            });

            fetchActiveFlow(airport.icao).then((newActiveFlow) => {
                if (newActiveFlow?.id !== activeFlow?.id) {
                    if (!newActiveFlow) {
                        setChanges([...changes, { type: "flow", message: 'NONE', }]);
                    } else {
                        setChanges([...changes, { type: "flow", message: newActiveFlow.name, }]);
                    }
                }
                setActiveFlow(newActiveFlow);
            });

            fetchDepartureGateAssignments(airport.icao).then((newDepAssignments) => {
                if (
                    newDepAssignments.length !== departureGateAssignments.length ||
                    !newDepAssignments.every((val, i) => val?.gates.every((val) => departureGateAssignments[i]?.gates.includes(val)))) {
                    setChanges([...changes, { type: "departure_gate_assignment", message: 'CHANGES', }]);
                }
                setDepartureGateAssignments(newDepAssignments);
            });

            fetchLocalRunwayAssignments(airport.icao).then((newLocalAssignments) => {
                if (
                    newLocalAssignments.length !== newLocalAssignments.length ||
                    !newLocalAssignments.every((val, i) => val?.runwayIdentifiers.every((val) => localRunwayAssignments[i]?.runwayIdentifiers?.includes(val)))) {
                    setChanges([...changes, { type: "local_runway_assignment", message: 'CHANGES', }]);
                }
                setLocalRunwayAssignments(newLocalAssignments);
            });

            fetchBroadcasts().then((newBroadcasts) => {
                if (
                    newBroadcasts.length !== broadcasts.length ||
                    !newBroadcasts.every((val, i) => val.id === broadcasts[i].id)) {
                    setChanges([...changes, { type: "broadcast", message: 'CHANGES', }]);
                }
                setBroadcasts(newBroadcasts);
            });

            fetchPireps().then((newPireps) => {
                if (
                    newPireps.length !== pireps.length ||
                    !newPireps.every((val, i) => val.id === pireps[i].id)) {
                    setChanges([...changes, { type: "pirep", message: 'CHANGES', }]);
                }
                setPireps(newPireps);
            });

        }, 5000);

        return () => clearInterval(changesInterval);
    }, [activeFlow?.id, airport.icao, atis?.last_updated, broadcasts, changes, departureGateAssignments, localRunwayAssignments, pireps]);

    const getColor = (meta: InformationChange): string => {
        switch (meta.type) {
            case "atis": return 'green';
            case "flow": return 'mediumvioletred';
            case "departure_gate_assignment": return 'skyblue';
            case "local_runway_assignment": return 'orange';
            case "broadcast": return 'gold';
            case "pirep": return 'red';
            default: return 'inherit';
        }
    }

    const getPrefixText = (meta: InformationChange): string => {
        switch (meta.type) {
            case "atis": return 'ATIS';
            case "flow": return 'FLOW';
            case "departure_gate_assignment": return 'DEP-GA';
            case "local_runway_assignment": return 'LC-RA';
            case "broadcast": return 'CIC';
            case "pirep": return 'PIREP';
            default: return '';
        }
    }

    return changes?.length > 0 && (
        <Grid container columns={2} spacing={2}>
            <Grid item xs={2} md={1} sx={{ border: 1, borderColor: 'red', }}>
                <Typography>Changes might take up to 20 seconds to reflect in the IDS</Typography>
                {changes.map((c, idx) => (
                    <Typography key={idx} color={getColor(c)} variant="h4">{getPrefixText(c)} --- {c.message}</Typography>
                ))}
            </Grid>
            <Grid item xs={2} md={1}>
                <Button size="large" variant="contained" sx={{ fontSize: 30, width: '100%', }} onClick={() => {
                    setChanges([])
                }}>ACKNOWLEDGE CHANGES</Button>
            </Grid>
        </Grid>
    );
}

export default AtctChangeAnnouncer;