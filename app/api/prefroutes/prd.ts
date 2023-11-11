import * as fs from "fs";
import * as path from "path";

// hi carson

class PreferredRoute {
    origin: string;
    route: string;
    destination: string;
    type: string;
    altitude: string;
    aircraft: string;
    originARTCC: string;
    destinationARTCC: string;

    constructor(origin: string, route: string, destination: string, type: string, altitude: string, aircraft: string, originARTCC: string, destinationARTCC: string) {
        this.origin = origin;
        this.route = route;
        this.destination = destination;
        this.type = type;
        this.altitude = altitude;
        this.aircraft = aircraft;
        this.originARTCC = originARTCC;
        this.destinationARTCC = destinationARTCC;
    }
}


// TODO: confirm file path for preferred routes database
const databasePath: string = "app/api/prefroutes/prefroutes_db.csv"

function loadPreferredRoutes(): PreferredRoute[] {
    // fetches preferred routes from faa website and writes to local csv file
    fetch("https://www.fly.faa.gov/rmt/data_file/prefroutes_db.csv")
        .then(response => response.text())
        .then(textContent =>
            fs.writeFileSync("app/api/prefroutes/prefroutes_db.csv", textContent, {flag: "w"}))


    const csvFilePath = path.resolve(databasePath);

    // reads local csv file and omits unnecessary information
    return fs.readFileSync(csvFilePath, {encoding: 'utf-8'})
        .split("\n")
        .map((row: string): PreferredRoute => {
            const splitRow = row.split(",")

            /**
             * splitRow[0] -> Origin
             * splitRow[1] -> Route
             * splitRow[2] -> Destination
             * splitRow[6] -> Type
             * splitRow[8] -> Altitude
             * splitRow[9] -> Aircraft
             * splitRow[12] -> Origin ARTCC
             * splitRow[13] -> Destination ARTCC
             * Other values are unnecessary.
             */

            return new PreferredRoute(splitRow[0], splitRow[1], splitRow[2], splitRow[6], splitRow[8], splitRow[9], splitRow[12], splitRow[13])
        });
}

function findPreferredRoutes(routeDatabase: PreferredRoute[], origin: string, destination: string): PreferredRoute[] {
    return routeDatabase.filter(route => {
        return route.origin === origin.toUpperCase() && route.destination === destination.toUpperCase()
    })
}

console.log(findPreferredRoutes(loadPreferredRoutes(), "DCA", "BOS"))
