import React from 'react';
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";
import LoginButton from "@/components/Login/LoginButton";
import IdsTab from "@/components/Tabs/IdsTab";
import EridsSidebar from "@/components/Sidebar/EridsSidebar";
import {Metadata} from "next";

// noinspection JSUnusedGlobalSymbols
export const metadata: Metadata = {
    title: 'ERIDS | vZDC',
}
async function EridsLayout({ children }: { children: React.ReactNode, }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <LoginButton session={session} />;
    }

    return (
        <>
            <EridsSidebar />
            <IdsTab>
                {children}
            </IdsTab>
        </>
    );
}

export default EridsLayout;