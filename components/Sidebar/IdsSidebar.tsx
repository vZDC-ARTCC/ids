import React from 'react';
import {AirportConfig, TraconAreaConfig} from "@/types";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import SopListItem from "@/components/Sidebar/SopListItem";

function IdsSidebar({ config }: { config: AirportConfig | TraconAreaConfig }) {

    const sopLink = config.sop;

    return (
        <Drawer variant="permanent">
            <Toolbar />
            <Divider />
            <List disablePadding>
                <SopListItem sopLink={sopLink} />
            </List>
        </Drawer>
    );
}

export default IdsSidebar;