import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './styles/globals.css'
import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const imgStyle = 'absolute drop-shadow-lg object-contain blur-[3px] w-1/2 md:w-fit -z-10 md:max-w-96 xl:max-h-1/2'

  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
      </head>
      <ThemeRegistry>
        <body className='flex flex-col min-h-screen w-screen relative'>
          <Header />
          <Suspense>
            {children}
          </Suspense>
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
