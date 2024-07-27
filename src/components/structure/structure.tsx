import * as React from 'react';
import { Box, Slide, Stack, styled, Typography, useScrollTrigger } from '@mui/material';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { useMarketStore } from '@/store';
import { AddToCartFloatButton, BuyMenu, Footer, Header, NotDevelopedModal, ScrollTopButton } from '@/components';
import { useEffect } from 'react';
import { Paths } from '@/global';
import { useRouter } from 'next/router';

interface StructureProps {
    children: React.ReactNode;
}
const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent': {
        fontFamily: 'sans-serif',
    },
}));

export const Structure: React.FC<StructureProps> = ({ children }) => {
    const scrolled = useScrollTrigger();
    const section = useMarketStore((store) => store.section?.toLocaleLowerCase());
    const theme = useMarketStore((store) => store.theme);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const paths = Object.values(Paths).map((e) => e.replace('/', ''));
            if (!paths.includes(window.location.pathname.replace('/', ''))) {
                router.push(Paths.Home);
            }
        }
    }, []);

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={1500}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            Components={{
                success: StyledMaterialDesignContent,
                info: StyledMaterialDesignContent,
                error: StyledMaterialDesignContent,
                warning: StyledMaterialDesignContent,
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
                <BuyMenu />
                <AddToCartFloatButton />
                <ScrollTopButton />
                <NotDevelopedModal />
                <Footer />
            </Box>
        </SnackbarProvider>
    );
};
