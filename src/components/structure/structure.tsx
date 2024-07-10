import * as React from 'react';
import { Box, Slide, Stack, Typography, useScrollTrigger } from '@mui/material';
import { Header } from '../header';
import { Footer } from '../footer';
import { ScrollTopButton } from '../scrollToTop';
import { useMarketStore } from '../../store';
import { AlertDialogSlide } from '../notDevelopedModal';
interface StructureProps {
    children: React.ReactNode;
}
export const Structure: React.FC<StructureProps> = ({ children }) => {
    const scrolled = useScrollTrigger();
    const section = useMarketStore((store) => store.section);

    return (
        <Box style={{ overflowX: 'hidden' }} bgcolor={'#bbe0ffb5'}>
            <Stack minHeight={'100vh'}>
                <Header />
                <Slide appear={true} direction="down" in={scrolled}>
                    <Typography
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            backgroundColor: '#1876D2',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'end',
                            width: '100%',
                            fontSize: '30px',
                            color: 'white',
                            height: '50px',
                            marginTop: '0px',
                            position: 'fixed',
                            top: 0,
                            zIndex: 100,
                        }}
                    >
                        {section}
                    </Typography>
                </Slide>
                <Typography
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        backgroundColor: '#1876D2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                        width: '100%',
                        fontSize: '30px',
                        color: 'white',
                        height: '50px',
                        position: 'sticky',
                        top: 0,
                        zIndex: 100,
                    }}
                >
                    {section}
                </Typography>
                <Box style={{ marginTop: 90, marginBottom: 90 }}>{children}</Box>
            </Stack>
            <ScrollTopButton />
            <AlertDialogSlide />
            <Footer />
        </Box>
    );
};
