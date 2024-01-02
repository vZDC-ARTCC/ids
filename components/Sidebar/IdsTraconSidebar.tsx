import React from 'react';
import {TraconArea} from "@prisma/client";
import {Divider, Drawer, List, Toolbar} from "@mui/material";
import SidebarListItem from "@/components/Sidebar/SidebarListItem";

function IdsTraconSidebar({ traconArea }: { traconArea: TraconArea, }) {

    const traconId = traconArea.traconFaaIdentifier;
    const areaId = traconArea.faaIdentifier;
    const drawerWidth = '5rem';


    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                maxWidth: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    maxWidth: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}>
            <Toolbar />
            <Divider />
            <List disablePadding>
                <SidebarListItem name="HOME" link={`/tracon/${traconId}/${areaId}/`} />
                <SidebarListItem name="SOP" link={`/tracon/${traconId}/${areaId}/sop`} />
                <SidebarListItem name="SPLIT" link={`/tracon/${traconId}/${areaId}/split`} />
                <SidebarListItem name="FLOW" link={`/tracon/${traconId}/${areaId}/flow`} />
                <SidebarListItem name="PROC" link={`/tracon/${traconId}/${areaId}/procedures`} />
                <SidebarListItem name="ASPC" link={`/tracon/${traconId}/${areaId}/airspace`} />
                <SidebarListItem name="LOA" link={`/tracon/${traconId}/${areaId}/loa`} />
                <SidebarListItem name="WX" link={`/tracon/${traconId}/${areaId}/wx`} />
                <SidebarListItem name="PIREP" link={`/tracon/${traconId}/${areaId}/pirep`} />
                <SidebarListItem name="ACFT" link={`/tracon/${traconId}/${areaId}/aircraft`} />
                <SidebarListItem name="EQMT" link={`/tracon/${traconId}/${areaId}/equipment`} />
                <SidebarListItem name="PRD" link={`/tracon/${traconId}/${areaId}/prd`} />
                <SidebarListItem name="CIC" link={`/tracon/${traconId}/${areaId}/cic`} color="gold" />
                <SidebarListItem name="EMRG" link={`/tracon/${traconId}/${areaId}/emergency`} color="red"/>
            </List>
        </Drawer>
    );
}

export default IdsTraconSidebar;