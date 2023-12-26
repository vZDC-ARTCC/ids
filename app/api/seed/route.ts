import {IDS_TRACON_FACILITIES} from "@/facility/facilities";
import {TraconConfig} from "@/types";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";
export async function GET() {

    // if ((await prisma.tracon.findMany()).length > 0) {
    //     return Response.json("Database has already been seeded.  If you have changed the configuration, make sure all the previous data is deleted.");
    // }

    await prisma.tracon.deleteMany();
    for (const tracon of IDS_TRACON_FACILITIES) {
        const savedTracon = await prisma.tracon.create({
            data: {
                faaIdentifier: tracon.faaIdentifier,
                name: tracon.name,
                departureGates: tracon.departureGates,
                sectors: {
                    create: tracon.sectors.map((sector) => {
                        return {
                            name: sector.name,
                            sectorLetter: sector.sectorLetter,
                            frequency: sector.frequency,
                            airspaceData: {
                                create: sector.airspaceData,
                            },
                        };
                    }),
                },
                areas: {
                    create: tracon.areas.map((area) => {
                        const { majorFields } = area;
                        return {
                            faaIdentifier: area.faaIdentifier,
                            name: area.name,
                            sopLink: area.sop,
                            areaMap: {
                                create: area.areaMaps,
                            },
                            majorFields: {
                                create: majorFields.map((majorField) => {
                                    return {
                                        icao: majorField.icao,
                                        faaIdentifier: majorField.faaIdentifier,
                                        sopLink: majorField.sop,
                                        localControlPositions: majorField.localControlPositions,
                                        customizableOptions: {
                                            create: majorField.customizableOptions.map((co) => {
                                                return {
                                                    name: co.name,
                                                    choices: co.choices,
                                                };
                                            }),
                                        },
                                        runways: {
                                            create: majorField.availableRunways.map((runway) => {
                                                return {
                                                    runwayNumber: runway.id,
                                                    approachTypes: runway.availableApproachTypes,
                                                    departureTypes: runway.availableDepartureTypes,
                                                };
                                            }),
                                        },
                                        flows: {
                                            create: majorField.flows.map((flow) => {
                                                return {
                                                    name: flow.name,
                                                    departureRunways: {
                                                        create: flow.departureRunways.map((dep) => {
                                                            return {
                                                                runwayNumber: dep.id,
                                                                departureTypes: dep.availableDepartureTypes,
                                                            };
                                                        }),
                                                    },
                                                    arrivalRunways: {
                                                        create: flow.arrivalRunways.map((arr) => {
                                                            return {
                                                                runwayNumber: arr.id,
                                                                approachTypes: arr.availableApproachTypes,
                                                            };
                                                        }),
                                                    },
                                                    traconVisibleOptions: {
                                                        create: flow.traconVisibleOptions.map((tvo) => {
                                                            return {
                                                                name: tvo.name,
                                                                choices: tvo.choices,
                                                            };
                                                        }),
                                                    }
                                                }
                                            }),
                                        }
                                    };
                                }),
                            },
                            minorFields: {
                                create: area.minorFields.map((field) => {
                                    return {
                                        icao: field.icao,
                                        faaIdentifier: field.faaIdentifier,
                                        sopLink: field.sop,
                                        localControlPositions: field.localControlPositions,
                                        customizableOptions: {
                                            create: field.customizableOptions.map((co) => {
                                                return {
                                                    name: co.name,
                                                    choices: co.choices,
                                                };
                                            }),
                                        },
                                        runways: {
                                            create: field.availableRunways.map((runway) => {
                                                return {
                                                    runwayNumber: runway.id,
                                                    approachTypes: runway.availableApproachTypes,
                                                    departureTypes: runway.availableDepartureTypes,
                                                };
                                            }),
                                        },
                                        flows: {
                                            create: field.flows.map((flow) => {
                                                return {
                                                    name: flow.name,
                                                    departureRunways: {
                                                        create: flow.departureRunways.map((dep) => {
                                                            return {
                                                                runwayNumber: dep.id,
                                                                departureTypes: dep.availableDepartureTypes,
                                                            };
                                                        }),
                                                    },
                                                    arrivalRunways: {
                                                        create: flow.arrivalRunways.map((arr) => {
                                                            return {
                                                                runwayNumber: arr.id,
                                                                approachTypes: arr.availableApproachTypes,
                                                            };
                                                        }),
                                                    },
                                                    traconVisibleOptions: {
                                                        create: flow.traconVisibleOptions.map((tvo) => {
                                                            return {
                                                                name: tvo.name,
                                                                choices: tvo.choices,
                                                            };
                                                        }),
                                                    }
                                                }
                                            }),
                                        }
                                    }
                                })
                            }
                        };
                    }),
                },
            },
            include: {
                sectors: true,
            }
        });

        for (const preset of tracon.presets) {
            await prisma.traconPositionPreset.create({
                data: {
                    name: preset.name,
                    sectors: {
                        connect: savedTracon.sectors.filter((s) => preset.sectorNames.includes(s.name)).map((s) => ({ id: s.id })),
                    },
                    traconId: tracon.faaIdentifier,
                },
            });
        }

    }

    return Response.json("Database seeded successfully!");
}