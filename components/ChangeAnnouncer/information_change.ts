export type InformationChange = {
    type: 'pirep' | 'broadcast' | 'flow' | 'atis' | 'local_runway_assignment' | 'departure_gate_assignment' | 'tracon_sectors',
    message: string,
}