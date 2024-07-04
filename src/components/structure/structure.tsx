import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { Header } from '../header';
import { Footer } from '../footer';
interface StructureProps {
    children: React.ReactNode;
}
export const Structure: React.FC<StructureProps> = ({ children }) => {
    return (
        <Box style={{ overflowX: 'hidden' }} bgcolor={'#bbe0ffb5'}>
            <Stack minHeight={'100vh'}>
                <Header />
                {children}
            </Stack>
            <Footer />
        </Box>
    );
};
