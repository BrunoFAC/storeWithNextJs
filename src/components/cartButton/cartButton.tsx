import { FC } from 'react';
import { useMarketStore } from '../../store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';
import { resources } from '../../global';
export interface CartButtonProps {
    id: number;
    fontSize?: string;
    handleCart: () => void;
}

export const CartButton: FC<CartButtonProps> = ({ handleCart, fontSize, id }) => {
    const { enqueueSnackbar } = useSnackbar();
    const theme = useMarketStore((store) => store.theme);
    const cart = useMarketStore((store) => store.cart);
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
