import React from 'react';
import {Stack, Typography} from "@mui/material";
import LoaSelect from "@/components/TraconSelect/LoaSelect";
import {fetchEnroute} from "@/actions/enroute";

async function LoaPage({ searchParams }: { searchParams: { selectedLoa?: string, }}) {

    const enroute = await fetchEnroute(true);
    if (!enroute) {
        return <Typography>Enroute not found</Typography>
    }
    const selectedLoa = enroute.loas.find((loa) => loa.id === searchParams.selectedLoa);

    return (
        <Stack direction="column" spacing={2} sx={{ width: '100%', }}>
            <Typography variant="h5">Select an LOA from the list.</Typography>
            <LoaSelect loas={enroute.loas} initialLoa={selectedLoa} />
            { selectedLoa &&
                <embed src={selectedLoa.link} style={{ width: '100%', minHeight: '700px', }}/>
            }
        </Stack>
    );
}

export default LoaPage;