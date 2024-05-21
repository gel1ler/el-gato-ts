'use client'
import React from 'react'
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export default function Loader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <Box
            className='w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-white transition-all duration-700'
            sx={{
                zIndex: 2000,
                opacity: loading ? 1 : 0,
                visibility: loading ? 'visible' : 'hidden',
            }}
        >
            Загрузка
        </Box >
    )
}