"use client";
import React, {useEffect, useState} from 'react';
import {CustomizableOption} from "@prisma/client";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {setOptionValue} from "@/actions/option";

function OptionSelect({ option, condensed }: { option: CustomizableOption, condensed: boolean, }) {

    const [selectedValue, setSelectedValue] = useState(option.value || '');

    useEffect(() => {
        setSelectedValue(option.value || '');
    }, [option.value]);

    const handleChange = (e: { target: { value: string, }, }) => {
        setOptionValue(option.id, e.target.value).then((option) => setSelectedValue(option.value || ''));
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={`${option.id}-label`}>Value</InputLabel>
            <Select
                sx={{
                    color: 'green',
                    fontSize: condensed ? 15 : 20,
                    fontWeight: 700,
                }}
                labelId={`${option.id}-label`}
                id={option.id}
                value={selectedValue}
                label="None"
                onChange={handleChange}
            >
                <MenuItem value={''} key={`${option.id}-none`}>-NONE-</MenuItem>
                {option.choices.map((choice) => (
                    <MenuItem value={choice} key={`${option.id}-${choice}`}>{choice}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default OptionSelect;