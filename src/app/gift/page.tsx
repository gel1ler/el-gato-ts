'use client'
import { Alert, Box, Button, CircularProgress, List, ListItemText, Snackbar, TextField, Typography, snackbarClasses } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import CircleVideo from "@/components/CircleVideo";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import MuiPhone from "@/components/form/PhoneNumber";
import SliderContainer from "@/components/SliderContainer";
import Header from "@/components/layout/Header";
import StarEffect from "@/components/StarEffect";
export default function Home() {
  const [loading, setLoading] = useState(true)
  const [openSnack, setOpenSnack] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [instName, setInstName] = useState('')
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

  return (
    <>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnack} autoHideDuration={3000} onClose={() => setOpenSnack(false)}>
        <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ boxShadow: '0 0 4px 2px rgba(0, 0, 0, .1)' }}>
          Имя аккаунта скопировано
        </Alert>
      </Snackbar>
      <Box
        className='flex justify-center relative transition-transform duration-500'
        sx={{
          transform: `translateX(${-step * 100}vw)`,
          width: `${length}00vw`,
          height: 'calc(100svh)',
        }}
      >
        {/* 1 */}
        <SliderContainer>
          {/* <StarEffect /> */}
          <CircleVideo />
          <Box className='flex justify-center flex-col items-center gap-1'>
            <Typography variant="h5" textAlign='center' className='mt-2'>
              Дорогие посетители!
            </Typography>
            <Typography variant="h6" textAlign='center' sx={{ letterSpacing: '1px' }}>
              Спасибо, что выбираете кофе в нашем салоне. Если Вы отметите нас в своем Инстаграм, то получите
            </Typography>
            <Typography variant="h6" textAlign='center' sx={{ letterSpacing: '1px' }}>
              <b className="bg-slate-100 text-[#47501A] py-1 px-3 rounded-lg text-xl">купон на 200 рублей</b>
            </Typography>
            <Typography variant="h6" textAlign='center' sx={{ letterSpacing: '1px' }}>
              на любую услугу.<br /> Ждем Вас в гости!
            </Typography>
          </Box>
          <Button variant="contained" onClick={onSubmit}>
            получить подарок
          </Button>
          <Typography variant="body2" textAlign='center'>
            Время получения подарка ~2 минуты
          </Typography>
        </SliderContainer>

        {/* 2 */}
        <SliderContainer row>
          <Image
            className="drop-shadow-lg"
            src='/phone.png'
            width={210}
            height={90}
            alt='phone'
          />
          <Box
            className="flex flex-col gap-2 self-stretch"
            sx={{ mt: [1, 'calc(100px + 3rem)'] }}
          >
            <List>

              <ListItemText disableTypography
                primary={<Typography fontSize={16} textAlign='center'>1. Отметьте нас в Инстаграм</Typography>}
              />
              <Typography
                variant="h4"
                textAlign='center'
                sx={{ cursor: 'pointer', my: '4px' }}
                onClick={() => {
                  navigator.clipboard.writeText('@elGato-ram')
                  setOpenSnack(true)
                }}
              >
                <b className="bg-slate-100 text-[#47501A] py-1 px-3 rounded-lg text-xl">@elGato-ram</b>
              </Typography>
              <Typography variant="body2" textAlign='center' mb={1}>
                Нажмите на имя аккаунта, чтобы скопировать его
              </Typography>
              <ListItemText disableTypography
                primary={<Typography fontSize={16} textAlign='center'>2. Покажите скрин отметки администратору</Typography>}
              />
              <ListItemText disableTypography
                primary={<Typography fontSize={16} textAlign='center'>3. Получите единоразовую скидку 200р на любую процедуру</Typography>}
              />
            </List>
          </Box>
        </SliderContainer >
      </Box >
    </>
  )
}