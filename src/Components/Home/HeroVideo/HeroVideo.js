import { Box, Container } from '@mui/material';
import React from 'react';
import VideoPlayer from "react-video-js-player"
import videoSrc from "../../../assets/video/hrcare.mp4"
import './HeroVideo.css'

const HeroVideo = () => {

    return (

        <Box className="video">
            <video src={videoSrc} height="100%" width="100%" autoPlay muted loop />
        </Box>

    );
};

export default HeroVideo;