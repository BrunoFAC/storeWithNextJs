import { Box, Button, IconButton, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import { Paths, resources } from '@/global';
import { removeDuplicates, sumFloatNumbersHelper } from '@/helpers';
import { useMarketStore, Products, useTransactionStore, useBillingStore } from '@/store';
import { useSnackbar } from 'notistack';
import { FC, Fragment } from 'react';
import { BuyMenusViews } from '../buyMenu.views';
import { useRouter } from 'next/router';

export interface BuyDrawerMDProps {
    toggleDrawer: () => void;
}
export const BuyDrawerMD: FC<BuyDrawerMDProps> = ({ toggleDrawer }) => {
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const theme = useMarketStore((store) => store.theme);
    const cart = useTransactionStore((store) => store.cart);
    const setBuyProducts = useBillingStore((store) => store.setBuyProducts);
    const removeCart = useTransactionStore((store) => store.removeCart);
    const priceProduct = (id: number) => cart.filter((c) => c.id === id)?.map((cart) => cart.price);

    const colorOnCart = theme.primary;
    const isDarkTheme = theme.type === 'dark';

    const handleClickCart = () => {
        setBuyProducts(cart);
        router.push(Paths.Confirmation);
    };

    const handleRemoveCart = (e: Products) => {
        removeCart(e);
        enqueueSnackbar(resources.removeFromCart, {
            variant: 'success',
        });
    };

    const quantityOfProducts = (id: number) => {
        return cart.filter((e) => e.id === id).length;
    };

    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                width: 400,
                height: '100%',
                overflow: 'auto',
                background: theme.primaryLight,
            }}
            onClick={() => toggleDrawer()}
        >
            <Box sx={{ width: 400, minHeight: '100vh' }}>
                <BuyMenusViews.Header width="400px" />
                <BuyMenusViews.Structure>
                    {removeDuplicates(cart).map((e, key) => (
                        <Fragment key={key}>
                            <Box
                                key={key}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'start',
                                    gap: '8px',
                                    background: theme.fadedBackground,
                                    borderRadius: '4px',
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Box
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '142px',
                                        height: '100%',
                                        backgroundColor: theme.light,
                                        borderRadius: '4px 0px 0px 4px',
                                        overflow: 'hidden',
                                        ...(!isDarkTheme && {
                                            border: `1px solid ${theme.border}`,
                                        }),
                                        padding: '4px',
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={e?.image}
                                        style={{
                                            height: 100,
                                            maxWidth: 150,
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                                <Box style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '200px' }}>
                                    <Box
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '4px',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                paddingTop: '12px',
                                                color: theme.light,
                                                overflowX: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {e.title}
                                        </Typography>
                                        <IconButton
                                            style={{ width: '24px', height: '24px' }}
                                            onClick={() => handleRemoveCart(e)}
                                        >
                                            <ClearIcon
                                                fontSize="small"
                                                style={{
                                                    color: theme.light,
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        </IconButton>
                                    </Box>
                                    <Typography style={{ color: theme.light, fontSize: '0.750rem' }}>
                                        {resources.shortQuantity} {quantityOfProducts(e.id)} {resources.price}{' '}
                                        {sumFloatNumbersHelper(priceProduct(e.id))}
                                        {' ' + resources.eurSignal}
                                    </Typography>
                                </Box>
                            </Box>
                        </Fragment>
                    ))}
                </BuyMenusViews.Structure>
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        width: '400px',
                        zIndex: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            backgroundColor: theme.primary,
                            padding: '24px 16px',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant={'contained'}
                            style={{
                                backgroundColor: theme.light,
                                color: colorOnCart,
                                width: '100%',
                            }}
                            startIcon={<ShoppingCartIcon />}
                            onClick={handleClickCart}
                        >
                            {resources.buy}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
