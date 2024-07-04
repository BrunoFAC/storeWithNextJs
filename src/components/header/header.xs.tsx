import * as React from 'react';
import { Box, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { Images } from '../../../public/images';
interface HeaderXSProps {
    pages: string[];
    anchorNav: HTMLElement | null;
    goTo: (link: string) => void;
    handleCloseNavMenu: () => void;
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
}
export const HeaderXS: React.FC<HeaderXSProps> = ({
    anchorNav,
    goTo,
    handleCloseNavMenu,
    pages,
    handleOpenNavMenu,
}) => {
    const resources = { store: 'STORE' };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={Boolean(anchorNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem
                            key={page}
                            onClick={() => {
                                handleCloseNavMenu();
                                goTo(page);
                            }}
                        >
                            <Typography variant="h6" noWrap textAlign="center">
                                {page}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Image src={Images.Head} alt="" width={35} height={35} />
            </Box>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                {resources.store}
            </Typography>
        </>
    );
};
