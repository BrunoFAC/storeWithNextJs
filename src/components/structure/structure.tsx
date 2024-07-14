import * as React from 'react';
import { Box, Slide, Stack, styled, Typography, useScrollTrigger } from '@mui/material';
import { Header } from '../header';
import { Footer } from '../footer';
import { ScrollTopButton } from '../scrollToTop';
import { useMarketStore } from '../../store';
import { AlertDialogSlide } from '../notDevelopedModal';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
interface StructureProps {
    children: React.ReactNode;
}
const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
        fontFamily: 'sans-serif',
    },
}));

export const Structure: React.FC<StructureProps> = ({ children }) => {
    const scrolled = useScrollTrigger();
    const section = useMarketStore((store) => store.section);
    const theme = useMarketStore((store) => store.theme);

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={1500}
            Components={{
                success: StyledMaterialDesignContent,
            }}
        >
            <Box style={{ overflowX: 'hidden' }} bgcolor={theme.primaryLight}>
                <Stack minHeight={'100vh'}>
                    <Header />
                    <Slide appear={true} direction="down" in={scrolled}>
                        <Typography
                            style={{
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                backgroundColor: theme.primary,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'end',
                                width: '100%',
                                fontSize: '30px',
                                color: theme.light,
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
                            backgroundColor: theme.primary,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'end',
                            width: '100%',
                            fontSize: '30px',
                            color: theme.light,
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
        </SnackbarProvider>
    );
};
