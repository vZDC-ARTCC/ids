import DBClient from "@/prisma/db_client";
import {IDS_TRACON_FACILITIES} from "@/facility/facilities";
import {Tracon} from "@prisma/client";
import {TraconConfig} from "@/types";

const PRISMA = DBClient.getInstance().prisma;
export async function GET() {

    await PRISMA.tracon.deleteMany();
    for (const tracon of IDS_TRACON_FACILITIES) {
        await PRISMA.tracon.upsert({
            create: getConfig(tracon),
            update: getConfig(tracon),
            where: {
                faaIdentifier: tracon.faaIdentifier,
            },
        });
    }

    return Response.json({ ok: true, });
}

function getConfig(tracon: TraconConfig) {
    return {
        faaIdentifier: tracon.faaIdentifier,
        name: tracon.name,
        departureGates: tracon.departureGates,
        areas: {
            create: tracon.areas.map((area) => {
                const { majorField } = area;
                return {
                    faaIdentifier: area.faaIdentifier,
                    name: area.name,
                    sopLink: area.sop,
                    sectors: {
                        create: area.sectors.map((sector) => {
                            return {
                                name: sector.name,
                                sectorLetter: sector.sectorLetter,
                                frequency: sector.frequency,
                            };
                        }),
                    },
                    majorField: {
                        create: {
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
                        }
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