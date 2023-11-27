import {IDS_TRACON_FACILITIES} from "@/facility/facilities";
import {TraconConfig} from "@/types";
import prisma from "@/lib/db";

// feel free to comment out this entire file or just the GET method.
export async function GET() {

    await prisma.tracon.deleteMany();
    for (const tracon of IDS_TRACON_FACILITIES) {
        await prisma.tracon.upsert({
            create: getConfig(tracon),
            update: getConfig(tracon),
            where: {
                faaIdentifier: tracon.faaIdentifier,
            },
        });
    }

    return Response.json("Database seeded successfully! ** MAKE SURE TO COMMENT OUT THIS API IN /app/api/seed/route.ts **");
}

function getConfig(tracon: TraconConfig) {
    return {
        faaIdentifier: tracon.faaIdentifier,
        name: tracon.name,
        departureGates: tracon.departureGates,
        sectors: {
            create: tracon.sectors.map((sector) => {
                return {
                    name: sector.name,
                    sectorLetter: sector.sectorLetter,
                    frequency: sector.frequency,
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
    }
}