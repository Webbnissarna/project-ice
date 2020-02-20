import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Theme } from './Theme';

export default function UIProvider({ children }) {
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    );
};
