import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './styles/globals.css'
// import './styles/anims.css'
// import Footer from '@/components/layout/footer/Footer'
import Loader from '@/components/layout/loader'
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import ScrolledHeader from '@/components/layout/header/types/ScrolledHeader'
import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Image from 'next/image'

function LoadingFallback() {
  return <>placeholder</>
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const imgStyle = 'absolute drop-shadow-lg object-contain blur-[3px] w-1/2 sm:w-fit -z-10'

  return (
    <html lang="ru">
      <head>
      </head>
      <ThemeRegistry>
        <body className='flex flex-col min-h-screen overflow-hidden w-screen'>
          {/* <Loader /> */}
          <Header />
          {children}
          {/* <Footer /> */}
          <Image
            className={`top-0 right-0 ${imgStyle}`}
            src='/leaf-1.png'
            width={500}
            height={400}
            alt='bg leaf'
          />
          <Image
            className={`bottom-0 right-0 ${imgStyle}`}
            src='/leaf-2.png'
            width={500}
            height={400}
            alt='bg leaf'
          />
          <Image
            className={`top-0 left-0  ${imgStyle}`}
            style={{ transform: 'scale(-1, 1)' }}
            src='/leaf-3.png'
            width={600}
            height={500}
            alt='bg leaf'
          />
        </body>
      </ThemeRegistry>
    </html>
  )
}
