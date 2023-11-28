import React from 'react';
import BroadcastPage from "@/components/Broadcast/BroadcastPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CIC | IDS',
}
async function CicPage() {
    return <BroadcastPage />
}

export default CicPage;