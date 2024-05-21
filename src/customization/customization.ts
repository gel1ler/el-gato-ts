import { IColors, IFooterProps, IHeaderProps } from "./types";

export const colors: IColors = {
    primary: '#135353',
    secondary: '#E5A019',
    bg: '#fff',
    additional: '#CBC2B9',
    helper: '#9e9e9e'
}

export const headerProps: IHeaderProps = {
    type: 'scrolled',
    scrollHeight: 0.5,
    remHeight: 7,
    topHeader: true,
    withShadow: true,
    menu: true,
    links: true,
}

export const footerProps: IFooterProps = {
    type: 'simple',
    logo: true
}

export const startParallax = [
    {
        start: 0,
        end: '50vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            }
        ]
    },
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -400,
                property: "translateY",
            },
        ]
    }
]
