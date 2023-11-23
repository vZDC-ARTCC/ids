import React from 'react';
import {Typography} from "@mui/material";
import IdsAtctSidebar from "@/components/Sidebar/IdsAtctSidebar";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import LoginButton from "@/components/Login/LoginButton";
import {fetchAirport} from "@/actions/airport";
import IdsTab from "@/components/Tabs/IdsTab";

async function AtctLayout({ children, params }: { children: React.ReactNode, params: { id: string, } }) {

    const session = await getServerSession(authOptions);

    if (!session) {
        return <LoginButton session={session} />;
    }

    const { id } = params;

    const airport = await fetchAirport(id);

    if (!airport) {
        return <Typography>Airport not found</Typography>
    }

    return (
        <>
            <IdsAtctSidebar airport={airport} />
            <IdsTab>
                {children}
            </IdsTab>
        </>
    );
}

export default AtctLayout;