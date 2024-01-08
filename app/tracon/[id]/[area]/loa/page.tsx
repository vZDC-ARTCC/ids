import React from 'react';
import {fetchLoas} from "@/actions/loa";
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Stack, Typography} from "@mui/material";
import LoaSelect from "@/components/TraconSelect/LoaSelect";

async function LoaPage({ params, searchParams }: { params: { id: string, area: string, }, searchParams: { selectedLoa?: string, }}) {

    const { id, area } = params;
    const traconArea = await fetchTraconAreaWithDetail(id, area);
    if (!traconArea) {
        return <Typography>TRACON not found</Typography>
    }
    const loas = await fetchLoas(id);
    const selectedLoa = loas.find((loa) => loa.id === searchParams.selectedLoa);

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography variant="h5">Select an LOA from the list.</Typography>
            <LoaSelect loas={loas} initialLoa={selectedLoa} />
            { selectedLoa &&
                <embed src={selectedLoa.link} style={{ width: '100%', minHeight: '700px', }}/>
            }
        </Stack>
    );
}

export default LoaPage;