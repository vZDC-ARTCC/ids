"use client";
import React, {useEffect} from 'react';
import {setActiveFlow} from "@/actions/flow";
import {useRouter} from "next/navigation";

function ActivateFlowPage({ params }: { params: { id: string, flowId: string, }}) {
    
    const { id, flowId } = params;
    const router = useRouter();
    
    useEffect(() => {
        setActiveFlow(id, flowId).then(() => {
            router.push(`/atct/${id}/`);
        });
    }, [id, flowId, router])
    
    return (
        <div></div>
    );
}

export default ActivateFlowPage;