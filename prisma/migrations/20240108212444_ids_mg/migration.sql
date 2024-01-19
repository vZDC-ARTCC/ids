-- CreateEnum
CREATE TYPE "PirepType" AS ENUM ('ROUTINE', 'URGENT');

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scopes" TEXT[],
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "fullName" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "artcc" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "division" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Enroute" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sopLink" TEXT NOT NULL,

    CONSTRAINT "Enroute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnrouteSector" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "external" BOOLEAN NOT NULL,
    "childSectorAssignmentId" TEXT,
    "enrouteId" TEXT,

    CONSTRAINT "EnrouteSector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnroutePositionPreset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enrouteId" TEXT,

    CONSTRAINT "EnroutePositionPreset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tracon" (
    "faaIdentifier" TEXT NOT NULL,
    "name" TEXT,
    "departureGates" TEXT[],

    CONSTRAINT "Tracon_pkey" PRIMARY KEY ("faaIdentifier")
);

-- CreateTable
CREATE TABLE "TraconPositionPreset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "traconId" TEXT,

    CONSTRAINT "TraconPositionPreset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraconArea" (
    "id" TEXT NOT NULL,
    "faaIdentifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sopLink" TEXT NOT NULL,
    "traconFaaIdentifier" TEXT,

    CONSTRAINT "TraconArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraconSector" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sectorLetter" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "childSectorAssignmentId" TEXT,
    "parentTraconId" TEXT,

    CONSTRAINT "TraconSector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AirspaceData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "notes" TEXT[],
    "traconSectorId" TEXT,
    "traconAreaId" TEXT,
    "airportId" TEXT,
    "enrouteId" TEXT,
    "enrouteSectorId" TEXT,

    CONSTRAINT "AirspaceData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoaData" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "targetFacility" TEXT NOT NULL,
    "traconId" TEXT,
    "enrouteId" TEXT,

    CONSTRAINT "LoaData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airport" (
    "icao" TEXT NOT NULL,
    "faaIdentifier" TEXT NOT NULL,
    "sopLink" TEXT NOT NULL,
    "localControlPositions" TEXT[],
    "priorityEnrouteId" TEXT,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("icao")
);

-- CreateTable
CREATE TABLE "AirportFlow" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flowActiveAirportId" TEXT,
    "airportId" TEXT,

    CONSTRAINT "AirportFlow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Runway" (
    "id" TEXT NOT NULL,
    "runwayNumber" TEXT NOT NULL,
    "approachTypes" TEXT[],
    "departureTypes" TEXT[],
    "flowId" TEXT,
    "airportId" TEXT,

    CONSTRAINT "Runway_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomizableOption" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT,
    "choices" TEXT[],
    "flowId" TEXT,
    "airportId" TEXT,

    CONSTRAINT "CustomizableOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TraconSectorAssignment" (
    "id" TEXT NOT NULL,
    "parentSectorId" TEXT NOT NULL,

    CONSTRAINT "TraconSectorAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnrouteSectorAssignment" (
    "id" TEXT NOT NULL,
    "parentSectorId" TEXT NOT NULL,

    CONSTRAINT "EnrouteSectorAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartureGatesAssignment" (
    "id" TEXT NOT NULL,
    "airportId" TEXT NOT NULL,
    "sectorId" TEXT NOT NULL,
    "gates" TEXT[],

    CONSTRAINT "DepartureGatesAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TowerRunwayAssignment" (
    "id" TEXT NOT NULL,
    "runwayIdentifiers" TEXT[],
    "localIdentifier" TEXT NOT NULL,
    "airportId" TEXT NOT NULL,

    CONSTRAINT "TowerRunwayAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pirep" (
    "id" TEXT NOT NULL,
    "urgency" "PirepType" NOT NULL,
    "location" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "flightLevel" TEXT NOT NULL,
    "aircraftType" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,

    CONSTRAINT "Pirep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Broadcast" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Broadcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EnroutePositionPresetToEnrouteSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TraconPositionPresetToTraconSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Airport_majorField" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Airport_minorField" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "TraconArea_traconFaaIdentifier_faaIdentifier_key" ON "TraconArea"("traconFaaIdentifier", "faaIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "TraconSector_parentTraconId_name_key" ON "TraconSector"("parentTraconId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_faaIdentifier_key" ON "Airport"("faaIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "AirportFlow_flowActiveAirportId_key" ON "AirportFlow"("flowActiveAirportId");

-- CreateIndex
CREATE UNIQUE INDEX "AirportFlow_airportId_name_key" ON "AirportFlow"("airportId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "_EnroutePositionPresetToEnrouteSector_AB_unique" ON "_EnroutePositionPresetToEnrouteSector"("A", "B");

-- CreateIndex
CREATE INDEX "_EnroutePositionPresetToEnrouteSector_B_index" ON "_EnroutePositionPresetToEnrouteSector"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TraconPositionPresetToTraconSector_AB_unique" ON "_TraconPositionPresetToTraconSector"("A", "B");

-- CreateIndex
CREATE INDEX "_TraconPositionPresetToTraconSector_B_index" ON "_TraconPositionPresetToTraconSector"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Airport_majorField_AB_unique" ON "_Airport_majorField"("A", "B");

-- CreateIndex
CREATE INDEX "_Airport_majorField_B_index" ON "_Airport_majorField"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Airport_minorField_AB_unique" ON "_Airport_minorField"("A", "B");

-- CreateIndex
CREATE INDEX "_Airport_minorField_B_index" ON "_Airport_minorField"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrouteSector" ADD CONSTRAINT "EnrouteSector_childSectorAssignmentId_fkey" FOREIGN KEY ("childSectorAssignmentId") REFERENCES "EnrouteSectorAssignment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrouteSector" ADD CONSTRAINT "EnrouteSector_enrouteId_fkey" FOREIGN KEY ("enrouteId") REFERENCES "Enroute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnroutePositionPreset" ADD CONSTRAINT "EnroutePositionPreset_enrouteId_fkey" FOREIGN KEY ("enrouteId") REFERENCES "Enroute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconPositionPreset" ADD CONSTRAINT "TraconPositionPreset_traconId_fkey" FOREIGN KEY ("traconId") REFERENCES "Tracon"("faaIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconArea" ADD CONSTRAINT "TraconArea_traconFaaIdentifier_fkey" FOREIGN KEY ("traconFaaIdentifier") REFERENCES "Tracon"("faaIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconSector" ADD CONSTRAINT "TraconSector_childSectorAssignmentId_fkey" FOREIGN KEY ("childSectorAssignmentId") REFERENCES "TraconSectorAssignment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconSector" ADD CONSTRAINT "TraconSector_parentTraconId_fkey" FOREIGN KEY ("parentTraconId") REFERENCES "Tracon"("faaIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirspaceData" ADD CONSTRAINT "AirspaceData_traconSectorId_fkey" FOREIGN KEY ("traconSectorId") REFERENCES "TraconSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirspaceData" ADD CONSTRAINT "AirspaceData_traconAreaId_fkey" FOREIGN KEY ("traconAreaId") REFERENCES "TraconArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirspaceData" ADD CONSTRAINT "AirspaceData_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirspaceData" ADD CONSTRAINT "AirspaceData_enrouteId_fkey" FOREIGN KEY ("enrouteId") REFERENCES "Enroute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirspaceData" ADD CONSTRAINT "AirspaceData_enrouteSectorId_fkey" FOREIGN KEY ("enrouteSectorId") REFERENCES "EnrouteSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoaData" ADD CONSTRAINT "LoaData_traconId_fkey" FOREIGN KEY ("traconId") REFERENCES "Tracon"("faaIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoaData" ADD CONSTRAINT "LoaData_enrouteId_fkey" FOREIGN KEY ("enrouteId") REFERENCES "Enroute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "Airport_priorityEnrouteId_fkey" FOREIGN KEY ("priorityEnrouteId") REFERENCES "Enroute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirportFlow" ADD CONSTRAINT "AirportFlow_flowActiveAirportId_fkey" FOREIGN KEY ("flowActiveAirportId") REFERENCES "Airport"("icao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AirportFlow" ADD CONSTRAINT "AirportFlow_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Runway" ADD CONSTRAINT "runway_departure_flow_fkey" FOREIGN KEY ("flowId") REFERENCES "AirportFlow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Runway" ADD CONSTRAINT "runway_arrival_flow_fkey" FOREIGN KEY ("flowId") REFERENCES "AirportFlow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Runway" ADD CONSTRAINT "Runway_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomizableOption" ADD CONSTRAINT "CustomizableOption_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "AirportFlow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomizableOption" ADD CONSTRAINT "CustomizableOption_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconSectorAssignment" ADD CONSTRAINT "TraconSectorAssignment_parentSectorId_fkey" FOREIGN KEY ("parentSectorId") REFERENCES "TraconSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrouteSectorAssignment" ADD CONSTRAINT "EnrouteSectorAssignment_parentSectorId_fkey" FOREIGN KEY ("parentSectorId") REFERENCES "EnrouteSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartureGatesAssignment" ADD CONSTRAINT "DepartureGatesAssignment_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartureGatesAssignment" ADD CONSTRAINT "DepartureGatesAssignment_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "TraconSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TowerRunwayAssignment" ADD CONSTRAINT "TowerRunwayAssignment_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnroutePositionPresetToEnrouteSector" ADD CONSTRAINT "_EnroutePositionPresetToEnrouteSector_A_fkey" FOREIGN KEY ("A") REFERENCES "EnroutePositionPreset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnroutePositionPresetToEnrouteSector" ADD CONSTRAINT "_EnroutePositionPresetToEnrouteSector_B_fkey" FOREIGN KEY ("B") REFERENCES "EnrouteSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TraconPositionPresetToTraconSector" ADD CONSTRAINT "_TraconPositionPresetToTraconSector_A_fkey" FOREIGN KEY ("A") REFERENCES "TraconPositionPreset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TraconPositionPresetToTraconSector" ADD CONSTRAINT "_TraconPositionPresetToTraconSector_B_fkey" FOREIGN KEY ("B") REFERENCES "TraconSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Airport_majorField" ADD CONSTRAINT "_Airport_majorField_A_fkey" FOREIGN KEY ("A") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Airport_majorField" ADD CONSTRAINT "_Airport_majorField_B_fkey" FOREIGN KEY ("B") REFERENCES "TraconArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Airport_minorField" ADD CONSTRAINT "_Airport_minorField_A_fkey" FOREIGN KEY ("A") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Airport_minorField" ADD CONSTRAINT "_Airport_minorField_B_fkey" FOREIGN KEY ("B") REFERENCES "TraconArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;
