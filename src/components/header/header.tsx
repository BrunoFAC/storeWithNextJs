import * as React from 'react';
import { AppBar, Toolbar, Container, Slide, useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';
import { HeaderViews } from './header.views';
import { Paths, Sections } from '@/global';
import { useMarketStore } from '@/store';

export const Header: React.FC = () => {
    const scrolled = useScrollTrigger();
    const router = useRouter();
    const theme = useMarketStore((store) => store.theme);

    const goTo = (link: Paths) => {
        router.push(link);
    };

    return (
        <Slide appear={false} direction="down" in={!scrolled}>
            <AppBar sx={{ bgcolor: theme.primary }} position="sticky" elevation={scrolled ? 1 : 0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HeaderViews.HeaderMD pages={Sections} goTo={goTo} />
                        <HeaderViews.HeaderXS goTo={goTo} />
                        <HeaderViews.HeaderProfile />
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
