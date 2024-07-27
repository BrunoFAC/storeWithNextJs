import { resources } from '@/global';
import { useMarketStore, useTransactionStore } from '@/store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FC } from 'react';

export interface CartButtonProps {
    id: number;
    fontSize?: string;
    handleCart: () => void;
}

export const CartButton: FC<CartButtonProps> = ({ handleCart, fontSize, id }) => {
    const { enqueueSnackbar } = useSnackbar();
    const theme = useMarketStore((store) => store.theme);
    const cart = useTransactionStore((store) => store.cart);
    const isOnCart = cart.some((e) => e.id === id);
    const colorOnCart = theme.type === 'dark' ? theme.primary : theme.secondary;

    const handleClickCart = () => {
        enqueueSnackbar(isOnCart ? resources.hasBeenRemovedFromCart : resources.hasBeenAddedToCart, {
            variant: 'success',
        });
        handleCart();
    };

    return (
        <Button
            variant={isOnCart ? 'contained' : 'outlined'}
            style={{
                ...(isOnCart && { backgroundColor: theme.light }),
                color: isOnCart ? colorOnCart : theme.light,
                borderColor: theme.light,
                width: '100%',
                ...(fontSize && { fontSize }),
            }}
            onClick={handleClickCart}
            startIcon={isOnCart ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
        >
            {isOnCart ? resources.removeFromCart : resources.addToCart}
        </Button>
    );
};
