import { FC } from 'react';
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { resources } from '@/global';
import { Products, useMarketStore, useTransactionStore } from '@/store';
export interface CartIconButtonProps {
    cartProduct: Products;
}

export const CartIconButton: FC<CartIconButtonProps> = ({ cartProduct }) => {
    const { enqueueSnackbar } = useSnackbar();

    const cart = useTransactionStore((store) => store.cart);
    const isOnCart = cart.some((e) => e.id === cartProduct.id);
    const addCart = useTransactionStore((store) => store.addCart);
    const removeCart = useTransactionStore((store) => store.removeCart);

    const handleCart = () => {
        if (cart.some((e) => e.id === cartProduct.id)) {
            removeCart(cartProduct);
        } else {
            addCart(cartProduct);
        }
    };
    const theme = useMarketStore((store) => store.theme);

    const handleClickCart = () => {
        enqueueSnackbar(isOnCart ? resources.hasBeenRemovedFromCart : resources.hasBeenAddedToCart, {
            variant: 'success',
        });
        handleCart();
    };
    return (
        <IconButton
            sx={{ color: theme.primary }}
            onClick={(e) => {
                handleClickCart();
                e.stopPropagation();
            }}
            size="small"
            color="primary"
        >
            {isOnCart ? (
                <ShoppingCartIcon sx={{ color: theme.primary }} />
            ) : (
                <ShoppingCartOutlinedIcon sx={{ color: theme.primary }} />
            )}
        </IconButton>
    );
};
