import React from 'react';
import Image from "next/image";
import logo from "@/public/img/logo.png";
import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <Image src={logo} alt="vZDC"/>
        </Link>
    );
}

export default Logo;