import React from 'react';
import {fetchTraconAreaWithDetail} from "@/actions/traconArea";
import {Box, Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import AirportOverview from "@/components/Airport/AirportOverview";
import BroadcastPirepGrid from "@/components/BroadcastPirep/BroadcastPirepGrid";
import LocalRunwayAssignment from "@/components/Airport/RunwayAssignment/LocalRunwayAssignment";
import TraconSectorsList from "@/components/Split/TraconSectorsList";
import AirportLiveWeather from "@/components/Airport/AirportLiveWeather";
import AirportInformation from "@/components/Airport/AirportInformation";
import {OpenInNew} from "@mui/icons-material";
import Link from 'next/link';

async function TraconHome({ params }: { params: { id: string, area: string, }}) {

    const { id, area } = params;

    const traconArea = await fetchTraconAreaWithDetail(id, area);

    return traconArea && traconArea.parentTracon && (
        <div>
            <Box>
                <TraconSectorsList tracon={traconArea.parentTracon} allSectors={traconArea.parentTracon.sectors} />
                <Grid container columns={10}>
                    <Grid xs={10} md={5} xl={3}>
                        <BroadcastPirepGrid />
                    </Grid>
                    <Grid item xs={10} md={5} xl={2} sx={{ border: 1, }}>
                        <Typography variant="h6" sx={{ padding: 1, }}>SATELLITE FIELDS</Typography>
                        <Typography sx={{ padding: 1, }}>Hover over ATIS code for METAR and FLOW for runways in use.</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ICAO</TableCell>
                                    <TableCell>ATIS</TableCell>
                                    <TableCell>FLOW</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {traconArea?.minorFields.map((field) => (
                                    <TableRow key={field.icao}>
                                        <TableCell>
                                            <Link href={`/atct/${field.icao}`} target="_blank" style={{ color: 'inherit', }}>
                                                <Button color="inherit" endIcon={<OpenInNew />}>{field.icao}</Button>
                                            </Link>
                                        </TableCell>
                                        <AirportLiveWeather icao={field.icao} condensed={true} tableCell={true} />
                                        <AirportInformation icao={field.icao} condensed={true} tableCell={true} />
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    {traconArea?.majorFields.map((field) => (
                        <Grid key={field.icao} item xs>
                            <AirportOverview icao={field.icao} condensed />
                            <LocalRunwayAssignment icao={field.icao} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Grid container columns={3} spacing={2}>
                {traconArea?.minorFields.map((field) => (
                    <Grid key={field.icao} item xs>
                        <AirportOverview icao={field.icao} condensed />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default TraconHome;