import React from 'react';
import {Divider, Drawer, List, Toolbar} from "@mui/material";

function IdsSidebar({ children }: { children: React.ReactNode, }) {

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
                {children}
            </List>
        </Drawer>
    );
}

export default IdsSidebar;