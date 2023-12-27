import React from 'react';
import {Divider, Drawer, List, Toolbar} from "@mui/material";
import SidebarListItem from "@/components/Sidebar/SidebarListItem";
import {Airport} from "@prisma/client";

function IdsAtctSidebar({ airport }: { airport: Airport }) {

    const id = airport.icao;
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
                <SidebarListItem name="HOME" link={`/atct/${id}/`} />
                <SidebarListItem name="SOP" link={`/atct/${id}/sop`} />
                <SidebarListItem name="FLOW" link={`/atct/${id}/flow`} />
                <SidebarListItem name="PROC" link={`/atct/${id}/procedures`} />
                <SidebarListItem name="ASPC" link={`/atct/${id}/airspace`} />
                <SidebarListItem name="WX" link={`/atct/${id}/wx`} />
                <SidebarListItem name="PIREP" link={`/atct/${id}/pirep`} />
                <SidebarListItem name="ACFT" link={`/atct/${id}/aircraft`} />
                <SidebarListItem name="EQMT" link={`/atct/${id}/equipment`} />
                <SidebarListItem name="PRD" link={`/atct/${id}/prd`} />
                <SidebarListItem name="CIC" link={`/atct/${id}/cic`} />
                <SidebarListItem name="EMRG" link={`/atct/${id}/emergency`} color="red"/>
            </List>
        </Drawer>
    );
}

export default IdsAtctSidebar;