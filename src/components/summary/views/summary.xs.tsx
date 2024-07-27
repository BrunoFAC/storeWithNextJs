import { Paths, resources } from '@/global';
import { sumFloatNumbersHelper } from '@/helpers';
import { useMarketStore, useBillingStore, useTransactionStore } from '@/store';
import { Box, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { AddressAccordion } from '@/components';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
export interface SummaryProps {
    priceProduct: (id?: number) => number[];
}
export const SummaryXS: FC<SummaryProps> = ({ priceProduct }) => {
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const theme = useMarketStore((store) => store.theme);
    const buyProducts = useBillingStore((store) => store.buyProducts);
    const billingAddress = useBillingStore((store) => store.billingAddress);
    const setBoughtProducts = useBillingStore((store) => store.setBoughtProducts);
    const setCart = useTransactionStore((store) => store.setCart);
    const cart = useTransactionStore((store) => store.cart);

    const isDisabled = () => {
        if (!buyProducts.length) return true;
        if (billingAddress.nif.status !== 'success' || billingAddress.zipCode.status !== 'success') return true;
        if (billingAddress.address.length < 10 || billingAddress.fullName.length < 3) return true;
        return false;
    };
    const handleOnClick = () => {
        if (isDisabled()) {
            enqueueSnackbar(resources.errorBuyProducts, {
                variant: 'error',
            });
        } else {
            enqueueSnackbar(resources.successOrder, {
                variant: 'success',
                autoHideDuration: 3000,
            });
            setTimeout(() => {
                router.push(Paths.Home);
                setBoughtProducts();
                setCart(cart.filter((e) => !buyProducts.includes(e)));
            }, 3000);
        }
    };

    return (
        <Box
            sx={{
                display: { md: 'none', xs: 'flex' },
                flexDirection: 'column',
                background: theme.fadedBackground,
                width: '100%',
                height: 'min-content',
                borderRadius: '4px',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    gap: '12px',
                }}
            >
                <Typography
                    style={{
                        color: theme.light,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                    }}
                >
                    {resources.summary}
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        paddingTop: '16px',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography style={{ color: theme.light, fontWeight: 'bold', fontSize: '0.95rem' }}>
                        {resources.totalOfItems}
                    </Typography>
                    <Typography style={{ color: theme.light, fontSize: '0.95rem' }}>
                        {buyProducts.length}{' '}
                        {buyProducts.length > 1 ? resources.multiProducts : resources.singleProduct}
                    </Typography>
                </Box>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography style={{ color: theme.light, fontWeight: 'bold', fontSize: '0.95rem' }}>
                        {resources.totalPrice}
                    </Typography>
                    <Typography style={{ color: theme.light, fontSize: '0.95rem' }}>
                        {sumFloatNumbersHelper(priceProduct())} {resources.eur}
                    </Typography>
                </Box>
                <AddressAccordion />
                <Button
                    onClick={() => handleOnClick()}
                    variant="outlined"
                    style={{
                        borderColor: theme.light,
                        color: theme.light,
                    }}
                >
                    {resources.buy}
                </Button>
            </Box>
        </Box>
    );
};
