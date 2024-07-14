import { Box, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from 'react';
import { useMarketStore } from '../../store';
import { useSnackbar, VariantType } from 'notistack';

interface TopStructureProps {
    price: number;
    id: number;
    handleFavorite: () => void;
    handleCart: () => void;
}

export const TopStructure: FC<TopStructureProps> = ({ price, id, handleCart, handleFavorite }) => {
    const theme = useMarketStore((store) => store.theme);
    const { enqueueSnackbar } = useSnackbar();

    const favorites = useMarketStore((store) => store.favorites);
    const cart = useMarketStore((store) => store.cart);
    const isOnCart = cart.some((e) => e.id === id);
    const isOnFavorites = favorites.some((e) => e.id === id);

    const handleClickCart = () => {
        const hasAdded = 'Added to the cart.';
        const hasRemoved = 'Removed from to the cart.';
        enqueueSnackbar(isOnCart ? hasRemoved : hasAdded, { variant: 'success' });
        handleCart();
    };

    const handleClickFavorites = () => {
        const hasAdded = 'Added to the favorites.';
        const hasRemoved = 'Removed from to the favorites.';
        enqueueSnackbar(isOnFavorites ? hasRemoved : hasAdded, { variant: 'success' });
        handleFavorite();
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px 0px',
                position: 'relative',
                zIndex: 1,
                flexDirection: 'row',
            }}
        >
            <Typography style={{ color: theme.primary }}>{price + ' €'}</Typography>
            <Box style={{ flexDirection: 'row' }}>
                <IconButton sx={{ color: theme.primary }} onClick={handleClickCart} size="small" color="primary">
                    {isOnCart ? (
                        <ShoppingCartIcon sx={{ color: theme.primary }} />
                    ) : (
                        <ShoppingCartOutlinedIcon sx={{ color: theme.primary }} />
                    )}
                </IconButton>
                <IconButton sx={{ color: theme.primary }} onClick={handleClickFavorites} size="small" color="primary">
                    {isOnFavorites ? (
                        <FavoriteIcon sx={{ color: theme.primary }} />
                    ) : (
                        <FavoriteBorderIcon sx={{ color: theme.primary }} />
                    )}
                </IconButton>
            </Box>
        </Box>
    );
};
