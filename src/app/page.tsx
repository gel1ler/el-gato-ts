'use client'
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [pauseBtnText, setPauseBtnText] = useState('►')
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


  const videoRef = useRef(null)

  const videoBtnClick = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return
    if (videoElement.paused) {
      videoElement.play();
      setPauseBtnText('❚❚');
    } else {
      videoElement.pause();
      setPauseBtnText('►');
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return (
    <Box className='w-scren h-screen flex justify-center items-center'>
      < CircularProgress size={50} />
    </Box >
  )
  else return (
    <Box
      className='flex items-center justify-center relative transition-transform duration-500'
      style={{
        transform: `translateX(${-step * 100}vw)`,
        width: `${length}00vw`
      }}
    >

      <Box className='w-screen flex justify-center flex-col items-center gap-2 px-5'>
        <video src="/video.MP4" autoPlay muted className='rounded-full w-80 h-80' />

        <div className="video-container">
          <video ref={videoRef} id="telegramVideo">
            <source src="/video.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="controls">
            <button id="playPauseBtn">&#9658;</button>
          </div>
        </div>

        <Typography variant="h6" textAlign='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo dolor nobis maiores ullam assumenda? Ratione aperiam deserunt id adipisci ducimus voluptas tempore et sint quia? Ex ipsam excepturi harum!
        </Typography>
        <Button variant="contained" onClick={onSubmit}>
          получить подарок
        </Button>
      </Box>
      <Box id='second-slide' className="w-screen">
        <Box className="flex flex-col items-center w-full gap-4 max-w-2xl mx-auto">
          2
        </Box>
      </Box>
    </Box>
  )

}
