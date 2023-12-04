import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import LoginButton from "@/components/Login/LoginButton";
import {Typography} from "@mui/material";
import IdsTab from "@/components/Tabs/IdsTab";
import {fetchTraconArea} from "@/actions/traconArea";
import IdsTraconSidebar from "@/components/Sidebar/IdsTraconSidebar";

async function TraconLayout({ params, children }: { params: { id: string, area: string, }, children: React.ReactNode, }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <LoginButton session={session} />;
    }

    const { id, area } = params;

    const traconArea = await fetchTraconArea(id, area);

    if (!area) {
        return <Typography>Area not found</Typography>
    }

    return (
        <>
            <IdsTraconSidebar traconArea={traconArea} />
            <IdsTab>
                {children}
            </IdsTab>
        </>
    );
}

export default TraconLayout;