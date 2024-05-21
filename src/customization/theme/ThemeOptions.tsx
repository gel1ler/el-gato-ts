import { PaletteColorOptions, ThemeOptions } from '@mui/material/styles'
import { colors, headerProps } from '../customization'
import { Inter } from 'next/font/google'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    additional?: PaletteColorOptions;
    helper?: PaletteColorOptions;
  }
}

export const inter = Inter({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic', 'latin']
})

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      light: '#F2BB50'
    },
    additional: {
      main: colors.additional ? colors.additional : '#fff'
    },
    helper: {
      main: colors.helper ? colors.helper : '#fff'
    },
    background: {
      default: colors.bg
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 13,
    fontWeightRegular: 500,
    h1: {
      fontSize: 45,
      fontWeight: 400
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '112px',
          boxShadow: headerProps.withShadow ? '0px 1px 10px rgba(0,0,0,.3)' : 'none',
        }
      }
    }
  }
}
