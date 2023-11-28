-- CreateEnum
CREATE TYPE "PirepType" AS ENUM ('ROUTINE', 'URGENT');

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
CREATE TABLE "Tracon" (
    "faaIdentifier" TEXT NOT NULL,
    "name" TEXT,
    "departureGates" TEXT[],

    CONSTRAINT "Tracon_pkey" PRIMARY KEY ("faaIdentifier")
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
    "parentTraconId" TEXT,

    CONSTRAINT "TraconSector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airport" (
    "icao" TEXT NOT NULL,
    "faaIdentifier" TEXT NOT NULL,
    "sopLink" TEXT NOT NULL,
    "localControlPositions" TEXT[],
    "parentTraconAreaId" TEXT NOT NULL,

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
CREATE UNIQUE INDEX "Airport_parentTraconAreaId_key" ON "Airport"("parentTraconAreaId");

-- CreateIndex
CREATE UNIQUE INDEX "AirportFlow_flowActiveAirportId_key" ON "AirportFlow"("flowActiveAirportId");

-- CreateIndex
CREATE UNIQUE INDEX "AirportFlow_airportId_name_key" ON "AirportFlow"("airportId", "name");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconArea" ADD CONSTRAINT "TraconArea_traconFaaIdentifier_fkey" FOREIGN KEY ("traconFaaIdentifier") REFERENCES "Tracon"("faaIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TraconSector" ADD CONSTRAINT "TraconSector_parentTraconId_fkey" FOREIGN KEY ("parentTraconId") REFERENCES "Tracon"("faaIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "airport_major_fields_fkey" FOREIGN KEY ("parentTraconAreaId") REFERENCES "TraconArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Airport" ADD CONSTRAINT "airport_minor_fields_fkey" FOREIGN KEY ("parentTraconAreaId") REFERENCES "TraconArea"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "DepartureGatesAssignment" ADD CONSTRAINT "DepartureGatesAssignment_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartureGatesAssignment" ADD CONSTRAINT "DepartureGatesAssignment_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "TraconSector"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TowerRunwayAssignment" ADD CONSTRAINT "TowerRunwayAssignment_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("icao") ON DELETE CASCADE ON UPDATE CASCADE;
