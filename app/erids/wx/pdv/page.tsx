import React from 'react';
import {Typography} from "@mui/material";

const VIDEO_SOURCE = process.env['WEATHER_BRIEFING_VIDEO_LINK'];
function PreDutyVideo() {

    if (!VIDEO_SOURCE) return <Typography>Video not configured</Typography>

    return (
        <video src={VIDEO_SOURCE} controls style={{ width: '100%', maxWidth: '60rem', }}>&nbsp;</video>
    );

}

export default PreDutyVideo;