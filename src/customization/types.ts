export interface IColors {
    primary: string,
    secondary: string,
    bg?: string,
    additional?: string,
    helper?: string
}

export interface IHeaderProps {
    type: 'static' | 'fixed' | 'scrolled' | 'animated',
    remHeight: number,
    withShadow?: boolean,
    topHeader?: boolean,
    fullwidth?: boolean,
    scrollHeight?: number,
    contacts?: boolean,
    links?: boolean,
    menu?: boolean,
    login?: boolean
}



export interface IFooterProps {
    type: 'simple' | 'complex',
    fullwidth?: boolean,
    menu?: boolean,
    logo?: boolean
}