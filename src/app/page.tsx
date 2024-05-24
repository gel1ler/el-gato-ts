'use client'
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [paused, setPaused] = useState(true)
  const [value, setValue] = useState(0)
  const router = useRouter()

  const onSubmit = async () => {
    router.push(`?step=${step + 1}`)
  }

  const length = 2

  //step handling
  const stepSchema = z.number().min(0).max(length)
  const searchParams = useSearchParams()
  const pStep = Number(searchParams.get('step'))
  const step = stepSchema.safeParse(pStep).success ? pStep : 0


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

    setLoading(false)

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', updateProgress);
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [videoRef.current])


  if (value >= 100) {
    setValue(0);
    setPaused(true);
  }

  if (loading) return (
    <Box className='w-scren h-screen flex justify-center items-center'>
      < CircularProgress size={50} />
    </Box >
  )

  else return (
    <Suspense>
      <Box
        className='flex items-center justify-center relative transition-transform duration-500 my-5'
        style={{
          transform: `translateX(${-step * 100}vw)`,
          width: `${length}00vw`
        }}
      >

        <Box className='w-screen'>
          <Box className=' max-w-screen-sm flex justify-center flex-col items-center gap-4 mx-auto'>
            <Box className="aspect-square relative cursor-pointer w-80 flex justify-center items-center" onClick={videoBtnClick}>
              <video ref={videoRef} className="aspect-square object-cover rounded-full transition-all" style={{ width: paused ? '18rem' : '20rem' }}>
                <source src="/video.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Box
                className="w-[20.6rem] aspect-square rounded-full absolute -z-10 drop-shadow-lg  transition-all"
                sx={{
                  width: paused ? '18.6rem' : '20.6rem',
                  background: `conic-gradient(#31562c ${value}%, transparent 0)`,
                }}

              >

              </Box>
              {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"> */}
              {/* <progress ref={progressRef} className=" z-10 w-full absolute" value="0" max="100" /> */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                  className="text-white text-5xl transition-transform"
                  style={{ filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, .3))' }}
                >
                  {paused ? '❚❚' : '►'}
                </button>
              </div>
            </Box>

            <Typography variant="h6" textAlign='center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo dolor nobis maiores ullam assumenda? Ratione aperiam deserunt id adipisci ducimus voluptas tempore et sint quia? Ex ipsam excepturi harum!
            </Typography>
            <Button variant="contained" onClick={onSubmit}>
              перейти в инстаграм
            </Button>
          </Box>
        </Box>
        <Box id='second-slide' className="w-screen">
          <Box className="flex flex-col items-center w-full gap-4 max-w-2xl mx-auto">
            2
          </Box>
        </Box>
      </Box>
    </Suspense>
  )

}
