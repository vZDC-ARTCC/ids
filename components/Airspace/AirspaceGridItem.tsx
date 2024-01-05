import React from 'react';
import {AirspaceData} from "@prisma/client";
import {Grid, List, ListItem, Typography} from "@mui/material";
import Image from "next/image";

function AirspaceGridItem({ data }: { data: AirspaceData }) {

    return (
        <Grid item xs={2} lg={1}>
            <Grid container columns={3} sx={{ border: 1, }}>
                <Grid item xs={2} xl={1}>
                    <Typography variant="h5" fontWeight={700} sx={{ padding: 1, }}>{data.name}</Typography>
                    <List>
                        {data.notes.map((note, i) => (
                            <ListItem key={i}>
                                <Typography variant="subtitle2">{note}</Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={2} xl={data.notes.length === 0 ? 3 : 2} sx={{ position: 'relative', minHeight: 500, alignSelf: 'center'  }}>
                    <Image src={data.imageUrl} alt={data.name} fill style={{ objectFit: 'contain', }}/>
                </Grid>
            </Grid>
        </Grid>
    );


}

export default AirspaceGridItem;