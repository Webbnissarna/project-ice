import React from 'react'
import TextLabel from '../Atomic/TextLabel';
import Box from '../Atomic/Box';

import { useTheme } from 'react-jss';

export default function ExampleComposition() {
    const theme = useTheme();
    return (
        <>
            <Box
            bgColor={theme.colors.black}
            fgColor={theme.colors.orange}
            padding={theme.paddings.md}
            >
                <TextLabel text={'Small'} fontSize={theme.fonts.fontSize.sm} />
                <TextLabel text={'Medium'} fontSize={theme.fonts.fontSize.md} />
                <TextLabel text={'Large'} fontSize={theme.fonts.fontSize.lg} />
            </Box>
        </>
    )
}
