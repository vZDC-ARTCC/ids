import React from 'react';
import SopTab from "@/components/Sop/SopTab";
import {fetchTraconArea} from "@/actions/traconArea";
import {fetchEnroute} from "@/actions/enroute";

async function SopPage() {

    const enroute = await fetchEnroute();

    return enroute && <SopTab sopLink={enroute.sopLink} />
}

export default SopPage;