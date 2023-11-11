import React from 'react';
import {FACILITIES, FacilityType} from "@/facility/facilities";
import {Typography} from "@mui/material";
import {AirportConfig} from "@/types";
import IdsSidebar from "@/components/Sidebar/IdsSidebar";

function Page({ params }: { params: { id: string, }}) {

    const { id } = params;

    const atct = FACILITIES.filter((facility) => facility.type === FacilityType.ATCT && facility.config.id === id);

    if (atct.length === 0) {
        return <Typography>ATCT not found</Typography>
    }

    const airportConfig = atct[0].config as AirportConfig;

    return (
        <>
            <IdsSidebar config={airportConfig} />
        </>
    );
}

export default Page;