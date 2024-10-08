import { Box, Fab, Tooltip, useScrollTrigger, Zoom } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { FC } from 'react';
import { useSnackbar } from 'notistack';
import { useMarketStore, useTransactionStore } from '@/store';
import { resources } from '@/global';

export const AddToCartFloatButton: FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
    const cart = useTransactionStore((store) => store.cart);
    const favorites = useTransactionStore((store) => store.favorites);
    const setCart = useTransactionStore((store) => store.setCart);
    const section = useMarketStore((store) => store.section?.toLocaleLowerCase());
    const theme = useMarketStore((store) => store.theme);

    const cartIds = cart.map((e) => e.id);
    const favoritesIds = favorites.map((e) => e.id);
    const allFavoritesAreOnCart = favoritesIds.every((id) => cartIds.includes(id));

    const addAllToCart = () => {
        enqueueSnackbar(resources.hasBeenAddedAllFavoritesToCart, {
            variant: 'success',
        });
        const favoritesNotIncludedInCart = favorites.filter((id) => !cart.includes(id));
        setCart([...cart, ...favoritesNotIncludedInCart]);
    };
    const removeAllToCart = () => {
        enqueueSnackbar(resources.hasBeenRemovedAllFavoritesFromCart, {
            variant: 'success',
        });
        const favoritesNotIncludedInCart = cart.filter((id) => !favorites.includes(id));
        setCart([...favoritesNotIncludedInCart]);
    };
    return (
        <>
            {section === 'favorites' && (
                <Box
                    position="fixed"
                    sx={{
                        bottom: scrolled ? 100 : 24,
                        transition: '0.2s ease-in-out',
                    }}
                    zIndex={2}
                    right={24}
                >
                    <Tooltip
                        placement="top"
                        title={allFavoritesAreOnCart ? resources.removeFromCart : resources.addToCart}
                        TransitionComponent={Zoom}
                    >
                        <Fab
                            sx={{
                                flexFlow: 'column',
                                width: 64,
                                height: 64,
                                color: theme.primary,
                            }}
                            onClick={() => (allFavoritesAreOnCart ? removeAllToCart() : addAllToCart())}
                        >
                            {allFavoritesAreOnCart ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
                        </Fab>
                    </Tooltip>
                </Box>
            )}
        </>
    );
};
