import { FC } from 'react';
import { Products, useMarketStore } from '../../store';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { resources } from '../../global';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSnackbar } from 'notistack';
export interface CardXSProps {
    detail: Products;
    width?: string;
    fontSize: string;
    handleBuy?: () => void;
}
export const BuyNow: FC<CardXSProps> = ({ detail, width, fontSize, handleBuy }) => {
    const { enqueueSnackbar } = useSnackbar();
    const showButtonBuyNow = useMarketStore((store) => store.showButtonBuyNow);
    const setOpenBuyModal = useMarketStore((store) => store.setOpenBuyModal);
    const theme = useMarketStore((store) => store.theme);
    const addToCart = useMarketStore((store) => store.addCart);
    const removeCart = useMarketStore((store) => store.removeCart);
    const cart = useMarketStore((store) => store.cart);

    const products = cart.filter((e) => e.id === detail.id);

    const numberOfProducts = products?.length;

    const isDisabledMinus = numberOfProducts === 1;
    const reachedMax = numberOfProducts > 2;

    const handleAddToCart = () => {
        if (reachedMax) {
            enqueueSnackbar(resources.stockMax, {
                variant: 'info',
            });
        } else {
            addToCart(detail);
        }
    };
    return showButtonBuyNow ? (
        <>
            <Button
                style={{
                    backgroundColor: theme.light,
                    color: theme.type === 'dark' ? theme.primary : theme.secondary,
                    borderRadius: '4px',
                    width: width ?? '100%',
                    fontSize: fontSize,
                }}
                onClick={() => (handleBuy ? handleBuy() : setOpenBuyModal({ open: true, detail: detail }))}
                variant={'contained'}
            >
                {resources.buyNow}
            </Button>
            {numberOfProducts > 0 && (
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '4px',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        disabled={isDisabledMinus}
                        style={{
                            backgroundColor: isDisabledMinus ? theme.gray : theme.light,
                            borderRadius: '4px',
                        }}
                        onClick={() => removeCart(detail, true)}
                    >
                        <RemoveIcon style={{ color: theme.primary, borderRadius: '4px' }} />
                    </IconButton>
                    <Typography style={{ color: theme.light }}>{numberOfProducts}</Typography>
                    <IconButton
                        onClick={handleAddToCart}
                        style={{
                            backgroundColor: theme.light,
                            borderRadius: '4px',
                        }}
                    >
                        <AddIcon style={{ color: theme.primary, borderRadius: '4px' }} />
                    </IconButton>
                </Box>
            )}
        </>
    ) : null;
};
