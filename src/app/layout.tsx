import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './styles/globals.css'
// import './styles/anims.css'
// import Footer from '@/components/layout/footer/Footer'
import Loader from '@/components/layout/loader'
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import ScrolledHeader from '@/components/layout/header/types/ScrolledHeader'
import { Suspense } from 'react'
import Header from '@/components/layout/Header'

function LoadingFallback() {
  return <>placeholder</>
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
      </head>
      <ThemeRegistry>
        <body className='flex flex-col min-h-screen'>
          {/* <Loader /> */}
          <Header />
          <section className='flex-grow w-screen overflow-x-hidden'>
            {children}
          </section>
          {/* <Footer /> */}
        </body>
      </ThemeRegistry>
    </html>
  )
}
