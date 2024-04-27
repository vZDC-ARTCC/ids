import {InformationChange} from "@/components/ChangeAnnouncer/information_change";
import {AirportData} from "@/app/atct/[id]/page";

export function getAtctChanges(oldData?: AirportData, newData?: AirportData) {
    if (!oldData) return [];
    const changes: InformationChange[] = [];
    if (oldData?.metar !== newData?.metar) {
        changes.push({
            type: "metar",
            message: `${newData?.icao} METAR UPDATED`,
        });
    }
    if (oldData?.atis?.atis_code !== newData?.atis?.atis_code) {
        changes.push({
            type: "atis",
            message: `${newData?.icao} ${newData?.atis?.atis_code || 'OFFLINE'}`,
        });
    }
    if (oldData?.airport.activeFlow?.id !== newData?.airport.activeFlow?.id) {
        changes.push({
            type: "flow",
            message: `${newData?.icao} ${newData?.airport.activeFlow?.name || 'N/A'}`,
        });
    }
    if (oldData?.airport?.departureGateAssignments.length !== newData?.airport.departureGateAssignments?.length || !oldData?.airport.departureGateAssignments.every((val, i) => val?.gates.every((val) => newData?.airport.departureGateAssignments[i]?.gates.includes(val)))) {
        changes.push({
            type: "departure_gate_assignment",
            message: `${newData?.icao} UPDATED`,
        });
    }
    if (oldData?.airport.localRunwayAssignments.length !== newData?.airport.localRunwayAssignments.length ||
        !oldData?.airport.localRunwayAssignments.every((val, i) => val?.runwayIdentifiers.every((val) => newData?.airport.localRunwayAssignments[i]?.runwayIdentifiers?.includes(val)))) {
        changes.push({
            type: "local_runway_assignment",
            message: `${newData?.icao} UPDATED`,
        });
    }
    return changes;
}