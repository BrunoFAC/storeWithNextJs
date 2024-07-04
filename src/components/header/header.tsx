import * as React from 'react';
import { AppBar, Toolbar, Container, Slide } from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import { useRouter } from 'next/router';
import { HeaderViews } from './header.views';

const pages = ['clothes', 'eletronics', 'jewelry'];

export const Header: React.FC = () => {
    const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);
    const scrolled = useScrollTrigger();
    const router = useRouter();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    };

    const goTo = (link: string) => {
        router.push(`/${link}`);
    };

    return (
        <Slide appear={false} direction="down" in={!scrolled}>
            <AppBar position="sticky" elevation={scrolled ? 1 : 0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <HeaderViews.HeaderMD pages={pages} goTo={goTo} handleCloseNavMenu={handleCloseNavMenu} />
                        <HeaderViews.HeaderXS
                            pages={pages}
                            anchorNav={anchorNav}
                            goTo={goTo}
                            handleCloseNavMenu={handleCloseNavMenu}
                            handleOpenNavMenu={handleOpenNavMenu}
                        />
                        <HeaderViews.HeaderProfile />
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
