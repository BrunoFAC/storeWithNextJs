import { Box, IconButton, Typography, Avatar, Tooltip, Zoom } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/router';
import { SwitchMode } from '@/components';
import { resources, Paths } from '@/global';
import { useMarketStore, useProfileStore, useTransactionStore } from '@/store';
import { useSnackbar } from 'notistack';
import { FC } from 'react';

export const HeaderProfile: FC = () => {
    const cart = useTransactionStore((store) => store.cart);
    const theme = useMarketStore((store) => store.theme);
    const favorites = useTransactionStore((store) => store.favorites);
    const profile = useProfileStore((store) => store.profile);
    const cartLength = cart.length;
    const favoritesLength = favorites.length;
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const handleClickCartOpen = () => {
        cartLength === 0 ? enqueueSnackbar(resources.alertNothingInCart, { variant: 'info' }) : router.push(Paths.Cart);
    };
    const handleClickFavoriteOpen = () => {
        favoritesLength === 0
            ? enqueueSnackbar(resources.alertNothingInFavorites, {
                  variant: 'info',
              })
            : router.push(Paths.Favorites);
    };

    const handleRedirectToProfile = () => {
        router.push(Paths.Profile);
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
                        onClick={handleClickFavoriteOpen}
                    >
                        <Tooltip TransitionComponent={Zoom} title={resources.favorites}>
                            <FavoriteBorderIcon />
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
                            '&:hover': {
                                bgcolor: theme.transparent,
                            },
                        })}
                        style={{
                            padding: 4,
                            width: 'min-content',
                        }}
                        onClick={handleClickCartOpen}
                    >
                        <Tooltip TransitionComponent={Zoom} title={resources.cart}>
                            <ShoppingCartOutlinedIcon />
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
            <Tooltip
                TransitionComponent={Zoom}
                sx={{ p: 0, display: { xs: 'flex', md: 'none' } }}
                title={resources.profile}
            >
                <IconButton onClick={handleRedirectToProfile} sx={{ p: 0, display: { xs: 'flex', md: 'none' } }}>
                    <Avatar
                        alt={profile?.fullName?.toLocaleUpperCase() ?? resources.guest}
                        src={profile?.image ?? '.'}
                        style={{ fontSize: '1rem', width: '35px', height: '35px' }}
                    />
                </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title={resources.profile} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton onClick={handleRedirectToProfile}>
                    <Avatar
                        alt={profile?.fullName?.toLocaleUpperCase() ?? resources.guest}
                        src={profile?.image ?? '.'}
                    />
                </IconButton>
            </Tooltip>
        </Box>
    );
};
