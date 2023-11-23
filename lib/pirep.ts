import {Pirep} from "@prisma/client";

export const formatPirep = (pirep: Pirep) => {
    return `
        ${pirep.urgency === 'URGENT' ? 'UUA' : 'UA' } /OV ${pirep.location}/TM ${getTime(pirep.time)}/${pirep.flightLevel}/TP ${pirep.aircraftType} --- ${pirep.remarks}
        `.toUpperCase();
};

const getTime = (date: Date) => {
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}${minutes}`;
}