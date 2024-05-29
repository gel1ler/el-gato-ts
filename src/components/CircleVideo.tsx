'use client'
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from 'react'

const CircleVideo = () => {
    const [paused, setPaused] = useState(true)
    const [value, setValue] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null);

    const videoBtnClick = () => {
        const videoElement = videoRef.current
        if (videoElement) {
            if (paused) {
                videoElement.play();
                setPaused(false);
            } else {
                videoElement.pause();
                setPaused(true);
            }
        }
    }

    useEffect(() => {
        const videoElement = videoRef.current;
        let animationFrameId: any;

        const updateProgress = () => {
            if (videoElement) {
                const duration = videoElement.duration;
                const currentTime = videoElement.currentTime;
                const progressValue = (currentTime / duration) * 100;
                setValue(progressValue)
            }
            animationFrameId = requestAnimationFrame(updateProgress);
        };

        if (videoElement) {
            videoElement.addEventListener('timeupdate', updateProgress);
            updateProgress()
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', updateProgress);
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [])


    if (value >= 100) {
        setValue(0);
        setPaused(true);
    }
    return (
        <Box className="aspect-square relative cursor-pointer w-80 flex justify-center items-center" onClick={videoBtnClick}>
            <video
                ref={videoRef}
                className="aspect-square object-cover rounded-full transition-all shadowed"
                style={{ width: paused ? '18rem' : '20rem' }}
                playsInline
                controls={false}
            >
                <source src="/video.MP4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Box
                className="w-[20.6rem] aspect-square rounded-full absolute -z-10 drop-shadow-lg  transition-all"
                sx={{
                    width: paused ? '18.6rem' : '20.6rem',
                    background: `conic-gradient(#B7BD9A ${value}%, transparent 0)`,
                }}
            >
            </Box>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                    className="text-white text-5xl"
                    style={{
                        filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, .3))',
                        transition: 'opacity .5s ease',
                        opacity: paused ? 1 : 0
                    }}
                >
                    {paused ? '❚❚' : '►'}
                </button>
            </div>
        </Box>
    )
}

export default CircleVideo