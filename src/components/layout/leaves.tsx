import { Box } from "@mui/material"
import Image from "next/image"



export const Leave = ({ number, top, left, right, bottom }: { number: number, top?: number, left?: number, right?: number, bottom?: number }) => {
    const position = (top ? '-top-' + top : '') + ' ' +
        (right ? '-right-' + right : '') + ' ' +
        (bottom ? '-bottom-' + bottom : '') + ' ' +
        (left ? '-left-' + left : '') + ' '

    return (
        <Box
            sx={{
                left,
                right,
                top,
                bottom
            }}
            className={`absolute w-1/2 max-w-sm aspect-square -z-10`}
        >
            <Image
                src={`/leave${number}.svg`}
                fill
                alt={`Leave ${number}`}
            />
        </Box>
    )
}