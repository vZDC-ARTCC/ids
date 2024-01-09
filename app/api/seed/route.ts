import {ENROUTE_FACILITY, IDS_ATCT_FACILITIES, IDS_TRACON_FACILITIES} from "@/facility/facilities";
import prisma from "@/lib/db";
import {
    AirportConfig,
    EnrouteConfig, EnroutePreset,
    EnrouteSectorConfig,
    LoaConfig,
    TraconAreaConfig,
    TraconConfig,
    TraconPreset,
    TraconSectorConfig
} from "@/types";
import {EnrouteSector, TraconSector} from "@prisma/client";

export const dynamic = "force-dynamic";
const DEV_MODE = process.env['DEV_MODE'] === 'true';
export async function GET() {

    if ((await prisma.tracon.findMany()).length > 0 && !DEV_MODE) {
        return Response.json("Database has already been seeded.  If you have changed the configuration, make sure all the previous data is deleted.");
    }

    await prisma.enroute.deleteMany();
    await prisma.tracon.deleteMany();
    await prisma.airport.deleteMany();
    await prisma.enrouteSector.deleteMany();

    await createAirports(IDS_ATCT_FACILITIES);
    await createTracons(IDS_TRACON_FACILITIES);
    await createEnroute(ENROUTE_FACILITY);

    return Response.json("Database seeded successfully!");
}

async function createAirports(airports: AirportConfig[]) {
    for (const airport of airports) {
        await prisma.airport.create({
            data: {
                icao: airport.icao,
                faaIdentifier: airport.faaIdentifier,
                sopLink: airport.sop,
                localControlPositions: airport.localControlPositions,
                airspaceData: {
                    create: airport.towerAirspace,
                },
                runways: {
                    create: airport.availableRunways.map((rwy) => {
                        return {
                            runwayNumber: rwy.id,
                            departureTypes: rwy.availableDepartureTypes,
                            approachTypes: rwy.availableApproachTypes,
                        };
                    }),
                },
                flows: {
                    create: airport.flows.map((flow) => {
                        return {
                            name: flow.name,
                            departureRunways: {
                                create: flow.departureRunways.map((rwy) => {
                                    return {
                                        runwayNumber: rwy.id,
                                        departureTypes: rwy.availableDepartureTypes,
                                    };
                                }),
                            },
                            arrivalRunways: {
                                create: flow.arrivalRunways.map((rwy) => {
                                    return {
                                        runwayNumber: rwy.id,
                                        approachTypes: rwy.availableApproachTypes,
                                    };
                                }),
                            },
                        };
                    })
                },
            },
        });
    }
}

async function createTracons(tracons: TraconConfig[]) {
    for (const tracon of tracons) {
        const savedAreas = await createAreas(tracon.areas);
        const savedSectors = await createSectors(tracon.sectors);
        const savedPresets = await createPresets(tracon.presets, savedSectors);
        const savedLoas = await createLoas(tracon.loas);
        await prisma.tracon.create({
            data: {
                faaIdentifier: tracon.faaIdentifier,
                name: tracon.name,
                departureGates: tracon.departureGates,
                loas: {
                    connect: savedLoas,
                },
                areas: {
                    connect: savedAreas,
                },
                sectors: {
                    connect: savedSectors,
                },
                presets: {
                    connect: savedPresets,
                }
            },
        });
    }
}

async function createAreas(areas: TraconAreaConfig[]) {
    const savedAreas = [];
    for (const area of areas) {
        const savedArea = await prisma.traconArea.create({
            data: {
                faaIdentifier: area.faaIdentifier,
                name: area.name,
                sopLink: area.sop,
                areaMap: {
                    create: area.areaMaps,
                },
                majorFields: {
                    connect: area.majorFields.map((ac) => ({ icao: ac.icao, })),
                },
                minorFields: {
                    connect: area.minorFields.map((ac) => ({ icao: ac.icao, })),
                },
            },
        });
        savedAreas.push(savedArea);
    }
    return savedAreas;
}

async function createSectors(sectors: TraconSectorConfig[]) {
    const savedSectors = [];
    for (const sector of sectors) {
        const savedSector = await prisma.traconSector.create({
            data: {
              name: sector.name,
              sectorLetter: sector.sectorLetter,
              frequency: sector.frequency,
              airspaceData: {
                  create: sector.airspaceData,
              },
            },
        });
        savedSectors.push(savedSector);
    }
    return savedSectors;
}

async function createPresets(presets: TraconPreset[], savedSectors: TraconSector[]) {
    const savedPresets= [];
    for (const preset of presets) {
        const savedPreset = await prisma.traconPositionPreset.create({
            data: {
                name: preset.name,
                sectors: {
                    connect: savedSectors.filter((s) => preset.sectorNames.includes(s.name)).map((s) => ({ id: s.id })),
                },
            },
        });
        savedPresets.push(savedPreset);
    }
    return savedPresets;
}

async function createLoas(loas: LoaConfig[]) {
    const savedLoas = [];
    for (const loa of loas) {
        const savedLoa = await prisma.loaData.create({
            data: {
                targetFacility: loa.targetFacility,
                link: loa.link,
            },
        });
        savedLoas.push(savedLoa);
    }
    return savedLoas;
}

async function createEnroute(enroute: EnrouteConfig) {
    const loas = await createLoas(enroute.loas);
    const sectors = await createEnrouteSectors(enroute.sectors);
    const presets = await createEnroutePresets(enroute.presets, sectors);
    return prisma.enroute.create({
        data: {
            id: enroute.id,
            name: enroute.name,
            sopLink: enroute.sopLink,
            airspace: {
                create: enroute.airspace,
            },
            loas: {
                connect: loas.map((l) => ({id: l.id,})),
            },
            presets: {
                connect: presets.map((p) => ({id: p.id})),
            },
            sectors: {
                connect: sectors.map((s) => ({ id: s.id, })),
            },
            priorityAirports: {
                connect: enroute.airportListPriority.map((a) => ({ icao: a.icao, })),
            },
        },
    });
}

async function createEnrouteSectors(sectors: EnrouteSectorConfig[]) {
    const savedEnrouteSectors = [];
    for (const sector of sectors) {
        const savedEnrouteSector = await prisma.enrouteSector.create({
            data: {
                id: sector.id,
                name: sector.name,
                frequency: sector.frequency,
                external: sector.externalArtcc || false,
                airspace: {
                    create: sector.airspace,
                },
            },
        });
        savedEnrouteSectors.push(savedEnrouteSector);
    }
    return savedEnrouteSectors;
}

async function createEnroutePresets(presets: EnroutePreset[], savedSectors: EnrouteSector[]) {
    const savedPresets= [];
    for (const preset of presets) {
        const savedPreset = await prisma.enroutePositionPreset.create({
            data: {
                name: preset.name,
                sectors: {
                    connect: savedSectors.filter((s) => preset.sectorIds.includes(s.id)).map((s) => ({ id: s.id })),
                },
            },
        });
        savedPresets.push(savedPreset);
    }
    return savedPresets;
}