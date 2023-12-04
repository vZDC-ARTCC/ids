import React from 'react';
import EmergencyChecklistTab from "@/components/Tabs/EmergencyChecklistTab";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'EMERGENCY CHECKLIST'
}
function EmergencyChecklistPage() {
    return <EmergencyChecklistTab />
}

export default EmergencyChecklistPage;