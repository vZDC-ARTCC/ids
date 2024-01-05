"use client";
import React, {useState} from 'react';
import {AirportFlowConfig, AvailableRunway} from "@/types";
import {
    Button,
    Container,
    IconButton,
    List,
    ListItem, ListItemText,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import AddRunwayForm from "@/components/Flow/AddRunwayForm";
import {Delete} from "@mui/icons-material";
import AddOptionForm from "@/components/Flow/AddOptionForm";
import {CustomizableOption} from "@/types";
import {createFlow, updateFlow} from "@/actions/flow";
import {useRouter, useSearchParams} from "next/navigation";
import {AirportFlow, Runway} from "@prisma/client";

function FlowAttributesForm({ icao, runways, presetFlowConfig }: { icao: string, runways: any[], presetFlowConfig?: AirportFlow | any, }) {


    const [flowConfig, setFlowConfig] = useState<AirportFlowConfig | any>(presetFlowConfig && {
        name: presetFlowConfig.name,
        departureRunways: presetFlowConfig.departureRunways.filter((rwy: Runway) => rwy.departureTypes.length > 0).map((rwy: Runway) => {
            return {
                id: rwy.runwayNumber,
                availableDepartureTypes: rwy.departureTypes,
            } as AvailableRunway;
        }),
        arrivalRunways: presetFlowConfig.arrivalRunways.filter((rwy: Runway) => rwy.approachTypes.length > 0).map((rwy: Runway) => {
            return {
                id: rwy.runwayNumber,
                availableApproachTypes: rwy.approachTypes,
            } as AvailableRunway;
        }),
        traconVisibleOptions: presetFlowConfig.traconVisibleOptions as CustomizableOption[],
    });

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUri = searchParams.get('redirect');

    const submit = async () => {
        if (!flowConfig.name || flowConfig.name.trim() === '') alert("Name is required");
        else if (!flowConfig.departureRunways || flowConfig.departureRunways.length === 0) alert('Departure runways are required')
        else if (!flowConfig.arrivalRunways || flowConfig.arrivalRunways.length === 0) alert('Arrival runways are required');
        else {
            let flow;
            if (!presetFlowConfig) {
                flow = await createFlow(icao, flowConfig);
            } else {
                flow = await updateFlow(icao, presetFlowConfig.id, flowConfig);
            }
            router.push(`../activate/${flow.id}`);
            if (redirectUri) {
                router.replace(redirectUri);
            }
        }
    }

    const addDepartureRunway = (runwayId: string, types: string[]) => {
        const runway = runways?.find((rwy) => rwy.id === runwayId);
        if (flowConfig?.departureRunways?.find((rwy: AvailableRunway) => rwy.id === runway.runwayNumber)) alert('Cannot duplicate runways, try deleting and creating another one.')
        else setFlowConfig({
            ...flowConfig,
            departureRunways: [
                ...flowConfig?.departureRunways || [],
                { id: runway.runwayNumber, availableDepartureTypes: types, },
            ]
        });
    }

    const addArrivalRunway = (runwayId: string, types: string[]) => {
        const runway = runways?.find((rwy) => rwy.id === runwayId);
        if (flowConfig?.arrivalRunways?.find((rwy: AvailableRunway) => rwy.id === runwayId)) alert('Cannot duplicate runways, try deleting and creating another one.')
        setFlowConfig({
            ...flowConfig,
            arrivalRunways:
                [
                    ...flowConfig?.arrivalRunways || [],
                    { id: runway.runwayNumber, availableApproachTypes: types, },
                ]
        });
    }

    const addTraconVisibleOption = (option: CustomizableOption) => {
        if (flowConfig?.traconVisibleOptions?.find((opt: CustomizableOption) => opt.name === option.name)) alert('Options cannot have the same name');
        else setFlowConfig({
            ...flowConfig,
            traconVisibleOptions: [
                ...flowConfig?.traconVisibleOptions || [],
                option,
            ],
        });
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            submit();
        }}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={2}>
                    <TextField
                        fullWidth
                        variant="filled"
                        label="Name"
                        value={flowConfig?.name || ''}
                        onChange={(e) => setFlowConfig({ ...flowConfig, name: e.target.value })}
                        required
                    />
                    <Typography variant="h6">Departure Runways:</Typography>
                    <Stack direction="column" spacing={2}>
                        <List>
                            {( !flowConfig?.departureRunways || flowConfig?.departureRunways?.length === 0) && <Typography>None</Typography>}
                            {flowConfig?.departureRunways?.map((rwy: AvailableRunway) => (
                                <ListItem key={rwy.id} secondaryAction={
                                    <IconButton onClick={() => setFlowConfig({ ...flowConfig, departureRunways: flowConfig.departureRunways.filter((drwy: AvailableRunway) => rwy.id !== drwy.id) })}>
                                        <Delete />
                                    </IconButton>
                                }>
                                    <ListItemText primary={`${rwy.id} (${rwy.availableDepartureTypes?.toString().replaceAll(',', ', ')})`}/>
                                </ListItem>
                            ))}
                        </List>
                        { runways && <AddRunwayForm runways={runways} getTypes={(rwyId) => runways?.find((rwy) => rwy.id === rwyId).departureTypes || []} onSubmit={addDepartureRunway} /> }
                    </Stack>
                    <Typography variant="h6">Arrival Runways:</Typography>
                    <Stack direction="column" spacing={2}>
                        <List>
                            {( !flowConfig?.arrivalRunways || flowConfig?.arrivalRunways?.length === 0) && <Typography>None</Typography>}
                            {flowConfig?.arrivalRunways?.map((rwy: AvailableRunway) => (
                                <ListItem key={rwy.id} secondaryAction={
                                    <IconButton onClick={() => setFlowConfig({ ...flowConfig, arrivalRunways: flowConfig.arrivalRunways.filter((arwy: AvailableRunway) => rwy.id !== arwy.id) })}>
                                        <Delete />
                                    </IconButton>
                                }>
                                    <ListItemText primary={`${rwy.id} (${rwy.availableApproachTypes?.toString().replaceAll(',', ', ')})`}/>
                                </ListItem>
                            ))}
                        </List>
                        { runways && <AddRunwayForm runways={runways} getTypes={(rwyId) => runways?.find((rwy) => rwy.id === rwyId).approachTypes || []} onSubmit={addArrivalRunway} /> }
                    </Stack>
                    <Typography variant="h6">TRACON Visible Options</Typography>
                    <Stack direction="column" spacing={2}>
                        <List>
                            {( !flowConfig?.traconVisibleOptions || flowConfig?.traconVisibleOptions?.length === 0) && <Typography>None</Typography>}
                            {flowConfig?.traconVisibleOptions?.map((opt: CustomizableOption) => (
                                <ListItem key={opt.name} secondaryAction={
                                    <IconButton onClick={() => setFlowConfig({ ...flowConfig, traconVisibleOptions: flowConfig.traconVisibleOptions.filter((tvo: CustomizableOption) => tvo.name !== opt.name) })}>
                                        <Delete />
                                    </IconButton>
                                }>
                                    <ListItemText primary={`${opt.name} (${opt.choices.toString().replaceAll(',', ', ')})`}/>
                                </ListItem>
                            ))}
                        </List>
                        { runways && <AddOptionForm onSubmit={addTraconVisibleOption} /> }
                    </Stack>
                    <Button variant="contained" type="submit" size="large">Save and Activate Flow</Button>
                </Stack>
            </Container>
        </form>
    );
}

export default FlowAttributesForm;