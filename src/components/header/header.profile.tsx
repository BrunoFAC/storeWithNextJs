import * as React from 'react';
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, Zoom, alpha } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMarketStore } from '../../store';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SwitchMode } from '../switchMode';
import { useSnackbar } from 'notistack';

export const HeaderProfile: React.FC = () => {
    const cart = useMarketStore((store) => store.cart);
    const theme = useMarketStore((store) => store.theme);
    const favorites = useMarketStore((store) => store.favorites);
    const cartLength = cart.length;
    const favoritesLength = favorites.length;
    // const handleRedirectToUser = () => {};
    const setOpenModal = useMarketStore((store) => store.setOpenModal);
    const { enqueueSnackbar } = useSnackbar();

    const handleClickCartOpen = () => {
        cartLength === 0
            ? enqueueSnackbar(`There's nothing in your cart yet.`, { variant: 'info' })
            : setOpenModal(true);
    };
    const handleClickFavoriteOpen = () => {
        favoritesLength === 0
            ? enqueueSnackbar(`There's nothing in your favorites yet.`, {
                  variant: 'info',
              })
            : setOpenModal(true);
    };

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    return (
        <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        width: '40px',
                    }}
                >
                    <IconButton
                        sx={() => ({
                            p: 0,
                            color: theme.light,
                            borderRadius: 0,
                            mr: 0.75,
                            '&:hover': {
                                bgcolor: theme.transparent,
                            },
                        })}
                        style={{
                            padding: 4,
                            width: 'min-content',
                        }}
                    >
                        <Tooltip TransitionComponent={Zoom} title="Favorites">
                            <FavoriteBorderIcon onClick={handleClickFavoriteOpen} />
                        </Tooltip>
                        {favoritesLength > 0 ? (
                            <Typography fontSize={9}>{favoritesLength > 99 ? '99+' : favoritesLength}</Typography>
                        ) : null}
                    </IconButton>
                </Box>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        width: '46px',
                    }}
                >
                    <IconButton
                        sx={() => ({
                            p: 0,
                            color: theme.light,
                            borderRadius: 0,
                            mr: 0.75,
                            '&:hover': {
                                bgcolor: theme.transparent,
                            },
                        })}
                        style={{
                            padding: 4,
                            width: 'min-content',
                        }}
                    >
                        <Tooltip TransitionComponent={Zoom} title="Cart">
                            <ShoppingCartOutlinedIcon onClick={handleClickCartOpen} />
                        </Tooltip>
                        {cartLength > 0 ? (
                            <Typography fontSize={9}>{cartLength > 99 ? '99+' : cartLength}</Typography>
                        ) : null}
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <SwitchMode />
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
