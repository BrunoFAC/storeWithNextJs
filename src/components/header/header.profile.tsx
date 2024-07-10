import * as React from 'react';
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, Zoom, alpha } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMarketStore } from '../../store';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const settings = ['Profile', 'Account', 'Logout'];

export const HeaderProfile: React.FC = () => {
    const cart = useMarketStore((store) => store.cart);
    const favorites = useMarketStore((store) => store.favorites);
    const cartLength = cart.length;
    const favoritesLength = favorites.length;
    // const handleRedirectToUser = () => {};
    const setOpenModal = useMarketStore((store) => store.setOpenModal);

    const handleClickOpen = () => {
        setOpenModal(true);
    };
    return (
        <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Tooltip TransitionComponent={Zoom} title="Cart">
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'start',
                        }}
                    >
                        <IconButton
                            sx={() => ({
                                p: 0,
                                color: 'white',
                                borderRadius: 0,
                                mr: 0.75,
                                '&:hover': {
                                    bgcolor: 'transparent',
                                },
                            })}
                            style={{
                                padding: 4,
                                width: 'min-content',
                            }}
                        >
                            <FavoriteBorderIcon onClick={handleClickOpen} />
                            {favoritesLength > 0 ? (
                                <Typography fontSize={9}>{favoritesLength > 99 ? '99+' : favoritesLength}</Typography>
                            ) : null}
                        </IconButton>
                    </Box>
                </Tooltip>

                <Tooltip TransitionComponent={Zoom} title="Cart">
                    <IconButton
                        sx={() => ({
                            p: 0,
                            color: 'white',
                            borderRadius: 0,
                            mr: 0.75,
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                        })}
                        style={{
                            padding: 4,
                            width: 'min-content',
                        }}
                    >
                        <ShoppingCartOutlinedIcon onClick={handleClickOpen} />
                        {cartLength > 0 ? (
                            <Typography fontSize={9}>{cartLength > 99 ? '99+' : cartLength}</Typography>
                        ) : null}
                    </IconButton>
                </Tooltip>
            </Box>
            <Tooltip TransitionComponent={Zoom} sx={{ p: 0, display: { xs: 'flex', md: 'none' } }} title="Settings">
                <IconButton onClick={handleClickOpen} sx={{ p: 0, display: { xs: 'flex', md: 'none' } }}>
                    <Avatar alt="Bruno" src="." style={{ fontSize: '1rem', width: '30px', height: '30px' }} />
                </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Settings" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton onClick={handleClickOpen} sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Avatar alt="Bruno" src="." />
                </IconButton>
            </Tooltip>
        </Box>
    );
};
