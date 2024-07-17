import * as React from 'react';
import { AppBar, Toolbar, Container, Slide, useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';
import { HeaderViews } from './header.views';
import { pages, useMarketStore } from '../../store';

export const Header: React.FC = () => {
    const scrolled = useScrollTrigger();
    const router = useRouter();
    const theme = useMarketStore((store) => store.theme);

    const goTo = (link: string) => {
        router.push(`/${link}`);
    };

    return (
        <Slide appear={false} direction="down" in={!scrolled}>
            <AppBar sx={{ bgcolor: theme.primary }} position="sticky" elevation={scrolled ? 1 : 0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HeaderViews.HeaderMD pages={pages} goTo={goTo} />
                        <HeaderViews.HeaderXS goTo={goTo} />
                        <HeaderViews.HeaderProfile />
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
