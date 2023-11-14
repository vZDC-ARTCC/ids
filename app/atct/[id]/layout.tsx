import React, {ReactNode} from 'react';
import {Box, Typography} from "@mui/material";
import IdsSidebar from "@/components/Sidebar/IdsSidebar";
import {AirportConfig} from "@/types";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import LoginButton from "@/components/Login/LoginButton";
import DBClient from "@/prisma/db_client";

async function AtctLayout({ children, params }: { children: React.ReactNode, params: { id: string, } }) {

    const session = await getServerSession(authOptions);

    if (!session) {
        return <LoginButton session={session} />;
    }

    const { id } = params;

    const prisma = DBClient.getInstance().prisma;

    const airport = await prisma.airport.findFirst({
        where: {
            icao: id,
        },
        include: {
            runways: true,
        }
    });

    if (!airport) {
        return <Typography>Airport not found</Typography>
    }

    return (
        <>
            <IdsSidebar airport={airport} />
            <div>
                {children}
            </div>

        </>
    );
}

export default AtctLayout;