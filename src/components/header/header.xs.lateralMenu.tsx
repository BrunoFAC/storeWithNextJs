import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

import Image from 'next/image';
import { FC, useState } from 'react';
import { pages, useMarketStore } from '../../store';
import { useRouter } from 'next/router';
import { Images } from '../../../public/images';
import { SwitchMode } from '../switchMode';

export const DrawerHeaderXS: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useMarketStore((store) => store.theme);

    const setOpenModal = useMarketStore((store) => store.setOpenModal);

    const handleClickOpen = () => {
        setOpenModal(true);
    };
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const router = useRouter();
    const handleRedirect = (link: string) => {
        router.push(`/${link}`);
    };
    const darkMode = { ...(theme.type === 'dark' && { sx: { color: theme.light } }) };

    const DrawerList = (
        <Box
            sx={{
                width: 250,
                background: theme.transparent,
                bgcolor: theme.primaryLight,
                overflowX: 'hidden',
                height: '100%',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    padding: '8px 8px 7px 16px',
                    height: '48.5px',
                    backgroundColor: theme.primary,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ mr: 1 }}>
                    <Image
                        src={theme.type === 'dark' ? Images.HeadLighter : Images.Head}
                        alt=""
                        width={35}
                        height={35}
                    />
                </Box>

                <Typography
                    noWrap
                    component="a"
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        fontSize: '.9rem',
                        letterSpacing: '.1rem',
                        color: theme.light,
                        textDecoration: 'none',
                    }}
                >
                    {'STORE'}
                </Typography>
            </Box>
            <List>
                <Box style={{ marginTop: '24px' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon onClick={() => handleRedirect('')}>
                                <HomeIcon {...darkMode} fontSize="large" />
                            </ListItemIcon>
                            <ListItemText {...darkMode} primary={'Home'} />
                        </ListItemButton>
                    </ListItem>
                </Box>
                {pages.map((text, index) => (
                    <Box key={`${index}-${text}`}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => handleRedirect(text)}>
                                <ListItemIcon>
                                    {index === 1 ? (
                                        <TvIcon {...darkMode} fontSize="large" />
                                    ) : index === 2 ? (
                                        <DiamondIcon {...darkMode} fontSize="large" />
                                    ) : (
                                        <CheckroomIcon {...darkMode} fontSize="large" />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    sx={{
                                        ...(theme.type === 'dark' && { color: theme.light }),
                                        textTransform: 'capitalize',
                                    }}
                                    primary={text}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                ))}
                <Box>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleClickOpen()}>
                            <ListItemIcon>
                                <AccountCircleIcon {...darkMode} fontSize="large" />
                            </ListItemIcon>
                            <ListItemText {...darkMode} primary={'Profile'} />
                        </ListItemButton>
                        <Box
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                alignItems: 'end',
                                justifyContent: 'end',
                                padding: '8px 8px 7px 16px',
                            }}
                        >
                            <SwitchMode />
                        </Box>
                    </ListItem>
                </Box>
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: theme.light }}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};
