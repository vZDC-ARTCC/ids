"use client";
import React, {useEffect} from 'react';
import {setActiveFlow} from "@/actions/flow";
import {useRouter, useSearchParams} from "next/navigation";
import {CircularProgress} from "@mui/material";

function ActivateFlowPage({ params }: { params: { id: string, flowId: string, }}) {
    
    const { id, flowId } = params;
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUri = searchParams.get('redirect');
    
    useEffect(() => {
        setActiveFlow(id, flowId).then(() => {
            router.replace(`/atct/${id}/`);
            if (redirectUri) {
                router.replace(redirectUri);
            }
        });
    }, [id, flowId, router, redirectUri])
    
    return (
        <CircularProgress />
    );
}

export default ActivateFlowPage;