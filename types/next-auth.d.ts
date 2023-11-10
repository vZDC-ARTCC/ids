// noinspection JSUnusedGlobalSymbols,ES6UnusedImports

import NextAuth from "next-auth"

declare module "next-auth" {

    interface Profile {
        id: string,
        cid: string,
        personal: {
            name_first: string,
            name_last: string,
            name_full: string,
            email: string,
        },
        vatsim: {
            rating: {
                id: number,
                long: string,
                short: string,
            },
            pilotrating: {
                id: number,
                long: string,
                short: string,
            },
            division: {
                id: string,
                name: string,
            },
            region: {
                id: string,
                name: string,
            },
            subdivision: {
                id: string,
                name: string,
            },
        }
    }

    interface User {
        cid: string,
        firstName: string,
        lastName: string,
        fullName: string,
        email: string,
        artcc: string,
        rating: number,
        division: string,
    }

    interface AdapterUser {
        cid: string,
        firstName: string,
        lastName: string,
        fullName: string,
        email: string,
        artcc: string,
        rating: number,
        division: string,
    }

    interface Session {
        user: {
            cid: string,
            firstName: string,
            lastName: string,
            fullName: string,
            email: string,
            artcc: string,
            rating: number,
            division: string,
        }
    }

}