import React from 'react';
import {Typography} from "@mui/material";
import IdsTab from "@/components/Tabs/IdsTab";
import Image from "next/image";
import equipment_suffixes_image from "../../public/faa/equipment_suffixes.png";
import Link from "next/link";

function EquipmentSuffixTab() {
    return (
        <>
            <Typography variant="h3">Equipment Suffixes</Typography>
            <Image src={equipment_suffixes_image} alt="Equipment Suffixes" />
            <Typography>Additional equipment suffixes:</Typography>
            <Link href="https://en.wikipedia.org/wiki/Equipment_codes" target="_blank" style={{ color: 'inherit '}}>
                <Typography>https://en.wikipedia.org/wiki/Equipment_codes</Typography>
            </Link>
        </>
    );
}

export default EquipmentSuffixTab;