'use client'
import { Alert, Box, Button, CircularProgress, Snackbar, TextField, Typography, snackbarClasses } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import CircleVideo from "@/components/CircleVideo";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import MuiPhone from "@/components/form/PhoneNumber";
import SliderContainer from "@/components/SliderContainer";
import { getInfo } from "@/services/inst";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [openSnack, setOpenSnack] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [instName, setInstName] = useState('')
  const router = useRouter()

  const onSubmit = async () => {
    router.push(`?step=${step + 1}`)
  }

  const length = 3

  //step handling
  const stepSchema = z.number().min(0).max(length)
  const searchParams = useSearchParams()
  const pStep = Number(searchParams.get('step'))
  const step = stepSchema.safeParse(pStep).success ? pStep : 0

  useEffect(() => {
    setLoading(false)
    getInfo()

    // const url = `https://graph.instagram.com/4112293751/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink&access_token=973006954522664|mlD08j9LHQED1neK26iICGpx1DE`;

    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Ошибка:', error);
    //   });

  }, [])

  if (loading) return (
    <Box className='w-scren h-screen flex justify-center items-center'>
      < CircularProgress size={50} />
    </Box >
  )

  else return (
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
          <CircleVideo />
          <Typography variant="h5" textAlign='center' className='mt-2'>
            Дорогие посетители!
          </Typography>
          <Typography variant="h6" textAlign='center' sx={{ letterSpacing: '1px' }}>
            Спасибо, что выбираете кофе в нашем салоне. Если Вы отметите нас в своем Инстаграм, то получите <b>купон на 200 рублей</b> на любую услугу.<br /> Ждем Вас в гости!
          </Typography>
          <Button variant="contained" onClick={onSubmit}>
            получить подарок
          </Button>
          <Typography variant="body2" color='additional.main' textAlign='center'>
            Время получения подарка ~2 минуты
          </Typography>
        </SliderContainer>

        {/* 2 */}
        <SliderContainer row>
          <Image
            style={{ marginTop: 'calc(100px + 3rem)' }}
            className="drop-shadow-lg"
            src='/phone.png'
            width={210 * 1.2}
            height={90 * 1.2}
            alt='phone'
          />
          <Box
            className="flex flex-col gap-2 self-stretch py-6"
            sx={{ mt: [1, 'calc(100px + 3rem)'] }}
          >
            <Typography variant='h6' textAlign='center'>
              Выложите похожую запись себе на страницу в инстаграм и не забудьте <b>упомнянуть наш аккаунт</b>, чтобы робот смог проверить выполнение условий.
            </Typography>
            <Typography
              variant="h4"
              textAlign='center'
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                navigator.clipboard.writeText('@elGato-ram')
                setOpenSnack(true)
              }}
            >
              @elGato-ram
            </Typography>
            <Typography variant="body2" color='additional.main' textAlign='center' mb={2}>
              Нажмите на имя аккаунта, чтобы скопировать его
            </Typography>


            <Typography variant="body1" textAlign='center' sx={{ mt: 'auto' }}>
              После выполнения условий возвращайтесь сюда и нажиматйте на кнопку ниже. <br />
              <b>Не забудьте включить VPN</b>
            </Typography>
            <Button
              sx={{ width: 'fit-content', mx: 'auto' }}
              variant='contained'
              onClick={onSubmit}
            >
              Запись у меня на странице
            </Button>
          </Box>
        </SliderContainer>

        {/* 3 */}
        <SliderContainer>
          <Typography variant='h6' textAlign='center' sx={{ mt: 'calc(100px + 3rem)' }}>
            Последний шаг. <br /> Заполните поля ниже для проверки вашего аккаунта.
          </Typography>
          <Typography textAlign='center' mt={2}>
            Номер телефона
          </Typography>
          <MuiPhone value={phoneNumber} onChange={setPhoneNumber} />
          <Typography textAlign='center' mt={2}>
            Имя инстаграм аккаунта
          </Typography>
          <TextField
            sx={{ input: { color: 'white' } }}
            value={instName}
            onChange={e => setInstName(e.target.value)}
            placeholder="@name"
          />
          <Button variant='contained' sx={{ mt: 2 }}>
            Отправить на проверку
          </Button>
        </SliderContainer>
      </Box >
    </>
  )
}