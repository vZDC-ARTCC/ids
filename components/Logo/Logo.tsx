import React from 'react';
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import {Box} from "@mui/material";

function Logo() {
    return (
        <Box sx={{ display: { xs: 'none', md: 'block', }, }}>
            <Link href="/">
                <Image src={logo} alt="vZDC"/>
            </Link>
        </Box>

    );
}

export default Logo;