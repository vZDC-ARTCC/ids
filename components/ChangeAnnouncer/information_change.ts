export type InformationChange = {
    type: 'pirep' | 'broadcast' | 'flow' | 'atis' | 'metar' | 'local_runway_assignment' | 'departure_gate_assignment' | 'tracon_sectors' | 'enroute_sectors',
    message: string,
}