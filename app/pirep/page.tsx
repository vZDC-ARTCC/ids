import React from 'react';
import PirepPage from "@/components/Pirep/PirepPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'PIREPs | IDS',
}

async function PirepMainPage() {
    return <PirepPage />
}

export default PirepMainPage;