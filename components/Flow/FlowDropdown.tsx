"use client";
import React from 'react';
import {AirportFlow} from "@prisma/client";
import {MenuItem, Select} from "@mui/material";

function FlowDropdown({ small = false, selectedFlowId, flows, onChange, }: { small?: boolean, selectedFlowId: string, flows?: AirportFlow[], onChange: (newFlowId: string) => void, }) {
    return (
        <Select
            labelId="flow-select-label"
            id="flow-select"
            value={selectedFlowId}
            label="Flow"
            sx={small ? { fontSize: 11 } : {}}
            onChange={(e) => onChange(e.target.value)}
        >
            {flows?.map((flow: AirportFlow) => (
                <MenuItem key={flow.id} value={flow.id}>
                    {flow.name}
                </MenuItem>
            ))}
        </Select>
    );
}

export default FlowDropdown;