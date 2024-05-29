import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

const SliderContainer = ({ children, row }: { children: ReactNode, row?: boolean }) => {
    return (
        <Box className='w-screen pb-10 pt-[6px] overflow-y-auto z-0'>
            <Box className={`max-w-screen-sm flex justify-center flex-col items-center gap-2 mx-auto px-2 ${row ? 'md:flex-row md:items-start' : ''}`}>
                {children}
            </Box>
        </Box>
    )
}

export default SliderContainer