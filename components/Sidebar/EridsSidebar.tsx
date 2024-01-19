import React from 'react';
import IdsSidebar from "@/components/Sidebar/IdsSidebar";
import SidebarListItem from "@/components/Sidebar/SidebarListItem";

function EridsSidebar() {
    return (
        <IdsSidebar>
            <SidebarListItem name="HOME" link={`/erids`} />
            <SidebarListItem name="SOP" link={`/erids/sop`} />
            <SidebarListItem name="SPLIT" link={`/erids/split`} />
            <SidebarListItem name="FLOW" link={`/erids/flow`} />
            <SidebarListItem name="PROC" link={`/erids/procedures`} />
            <SidebarListItem name="ASPC" link={`/erids/airspace`} />
            <SidebarListItem name="LOA" link={`/erids/loa`} />
            <SidebarListItem name="WX" link={`/erids/wx`} />
            <SidebarListItem name="PIREP" link={`/erids/pirep`} />
            <SidebarListItem name="ACFT" link={`/erids/aircraft`} />
            <SidebarListItem name="EQMT" link={`/erids/equipment`} />
            <SidebarListItem name="PRD" link={`/erids/prd`} />
            <SidebarListItem name="CIC" link={`/erids/cic`} color="gold" />
            <SidebarListItem name="EMRG" link={`/erids/emergency`} color="red"/>
        </IdsSidebar>
    );
}

export default EridsSidebar;