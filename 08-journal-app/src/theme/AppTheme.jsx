import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { purpleTheme } from './purpleTheme';


export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={ purpleTheme } >
            <CssBaseline>
                { children }
            </CssBaseline>
        </ThemeProvider>
    )
}
