import React from 'react';
import IdsTab from "@/components/Tabs/IdsTab";
import AirportHeader from "@/components/AirportHeader";

async function AtctHome({ params }: { params: { id: string, }, }) {

    const { id } = params;

    return (
        <IdsTab>
            <AirportHeader icao={id} />
        </IdsTab>
    );
}

export default AtctHome;