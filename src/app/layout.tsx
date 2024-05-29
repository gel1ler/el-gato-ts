import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './styles/globals.css'
import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import { Leave } from '@/components/layout/leaves'

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
        <body className='flex flex-col w-screen relative overflow-hidden' style={{ height: '100dvh' }}>
          <Leave number={1} left={-40} top={-20} />
          <Leave number={2} right={-50} top={-120} />
          <Leave number={4} right={-20} bottom={-100} />

          <Header />
          <Suspense>
            {children}
          </Suspense>
        </body>
      </ThemeRegistry>
    </html>
  )
}
