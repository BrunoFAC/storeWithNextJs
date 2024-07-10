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

export const DrawerHeaderXS: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

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

    const DrawerList = (
        <Box
            sx={{
                width: 250,
                background: 'transparent',
                bgcolor: '#D0E9FC',
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
                    backgroundColor: '#1876D2',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ mr: 1 }}>
                    <Image src={Images.Head} alt="" width={35} height={35} />
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
                        color: 'white',
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
                                <HomeIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                    </ListItem>
                </Box>
                {pages.map((text, index) => (
                    <Box>
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => handleRedirect(text)}>
                                <ListItemIcon>
                                    {index === 1 ? (
                                        <TvIcon fontSize="large" />
                                    ) : index === 2 ? (
                                        <DiamondIcon fontSize="large" />
                                    ) : (
                                        <CheckroomIcon fontSize="large" />
                                    )}
                                </ListItemIcon>
                                <ListItemText sx={{ textTransform: 'capitalize' }} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                ))}
                <Box style={{ marginTop: '24px' }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleClickOpen()}>
                            <ListItemIcon>
                                <AccountCircleIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary={'Profile'} />
                        </ListItemButton>
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
                onClick={toggleDrawer(true)}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};
