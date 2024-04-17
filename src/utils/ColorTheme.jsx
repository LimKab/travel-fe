import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { colors } from './colors';

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: colors.brandDarkGreen,
            contrastText: '#ffffff',
        },
        secondary: {
            main: colors.brandGreen,
            contrastText: '#ffffff',
        },
        success: {
            main: colors.brandGreen,
        },
        additional: {
            brandPurple: colors.brandPurple,
            brandSand: colors.brandSand,
            brandWhite: colors.brandWhite,
            brandBrownish: colors.brandBrownish,
        }
    },
})