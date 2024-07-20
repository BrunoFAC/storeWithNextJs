import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { resources } from '../../../global/resources';
import { removeDuplicates, sumFloatNumbersHelper } from '../../../helpers';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import { Products, useMarketStore } from '../../../store';
import { FC, Fragment } from 'react';
import { useSnackbar } from 'notistack';
import { BuyMenusViews } from '../buyMenu.views';

export interface BuyDrawerXSProps {
    toggleDrawer: () => void;
}
export const BuyDrawerXS: FC<BuyDrawerXSProps> = ({ toggleDrawer }) => {
    const { enqueueSnackbar } = useSnackbar();

    const theme = useMarketStore((store) => store.theme);
    const cart = useMarketStore((store) => store.cart);
    const setCart = useMarketStore((store) => store.setCart);
    const removeCart = useMarketStore((store) => store.removeCart);

    const priceProduct = (id: number) => cart.filter((c) => c.id === id)?.map((cart) => cart.price);

    const colorOnCart = theme.primary;
    const isDarkTheme = theme.type === 'dark';
    const fontSize = '0.75rem';

    const handleClickCart = () => {
        enqueueSnackbar(cart.length > 1 ? resources.multiPurchased : resources.singlePurchased, {
            variant: 'success',
        });
        setCart([]);
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
                display: { xs: 'flex', md: 'none' },
                width: 280,
                height: '100%',
                overflow: 'auto',
                background: theme.primaryLight,
            }}
            onClick={() => toggleDrawer()}
        >
            <Box sx={{ width: 280, minHeight: '100vh' }}>
                <BuyMenusViews.Header width="280px" />
                <BuyMenusViews.Structure fontSize={fontSize}>
                    {removeDuplicates(cart).map((e, key) => (
                        <Fragment key={key}>
                            <Box
                                key={key}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    background: theme.fadedBackground,
                                    alignItems: 'start',
                                    gap: '8px',
                                    borderRadius: '4px',
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Box
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '72px',
                                        height: '100%',
                                        backgroundColor: theme.light,
                                        borderRadius: '4px 0px 0px 4px',
                                        overflow: 'hidden',
                                        ...(!isDarkTheme && {
                                            border: '1px solid rgb(160, 179, 194)',
                                        }),
                                        padding: '4px',
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={e?.image}
                                        style={{
                                            height: 80,
                                            maxWidth: 80,
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                                <Box style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '150px' }}>
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
                                                fontSize,
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
                                    <Typography style={{ color: theme.light, fontSize: '0.70rem' }}>
                                        {resources.shortQuantity} {quantityOfProducts(e.id)} {resources.price}{' '}
                                        {sumFloatNumbersHelper(priceProduct(e.id))}
                                        {' ' + resources.eurSignal}
                                    </Typography>
                                </Box>
                            </Box>
                            {key !== removeDuplicates(cart).length - 1 && (
                                <Divider style={{ ...(isDarkTheme && { backgroundColor: theme.light }) }} />
                            )}
                        </Fragment>
                    ))}
                </BuyMenusViews.Structure>
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        zIndex: 1,
                        width: '280px',
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
                                fontSize,
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
