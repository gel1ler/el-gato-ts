'use client'
import { Box, Button, Typography } from "@mui/material";
import { useState } from 'react'

export default function Home() {
  const [clicked, setClicked] = useState(false)
  console.log(clicked)
  return (
    <main className="mx-auto gap-4 flex transition-transform duration-500" style={{ width: '200vw', transform: `translateX(${clicked ? '-100vw' : '0'})` }}>
      <Box id='first-slide' className="w-screen">
        <Box className="flex flex-col items-center w-full gap-4 max-w-2xl mx-auto">
          <Box className='bg-slate-400 rounded-full w-80 h-80' />
          <Typography variant="h6" textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo dolor nobis maiores ullam assumenda? Ratione aperiam deserunt id adipisci ducimus voluptas tempore et sint quia? Ex ipsam excepturi harum!
          </Typography>
          <Button variant="contained" onClick={() => setClicked(true)}>
            получить подарок
          </Button>
        </Box>
      </Box>
      <Box id='second-slide' className="w-screen">
        <Box className="flex flex-col items-center w-full gap-4 max-w-2xl mx-auto">
          2
        </Box>
      </Box>
    </main>
  );
}
