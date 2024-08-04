import { ConfirmationProducts, Summary } from '@/components';
import { Paths } from '@/global';
import { removeDuplicates } from '@/helpers';
import { useBillingStore, useMarketStore } from '@/store';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Confirmation: NextPage = () => {
    const router = useRouter();
    const buyProducts = useBillingStore((store) => store.buyProducts);
    const setIsSelectedAsProfile = useBillingStore((store) => store.setIsSelectedAsProfile);

    const setSelected = useBillingStore((store) => store.setSelected);
    const resetBillingDetails = useBillingStore((store) => store.resetBillingDetails);
    const priceProduct = (id?: number) => buyProducts.filter((c) => !id || c.id === id)?.map((cart) => cart.price);
    const quantityOfProducts = (id: number) => {
        return buyProducts.filter((e) => e.id === id).length;
    };
    useEffect(() => {
        if (!buyProducts.length) {
            router.push(Paths.Home);
        }
    }, [buyProducts]);

    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection(Paths.Confirmation);
        return () => {
            resetBillingDetails();
            setSelected();
            setIsSelectedAsProfile(false);
        };
    }, []);

    return (
        <>
            <Box sx={{ display: { md: 'flex', xs: 'none' }, flexDirection: 'row', gap: '12px' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '50%' }}>
                    {removeDuplicates(buyProducts).map((e, key) => (
                        <ConfirmationProducts
                            key={key}
                            e={e}
                            priceProduct={priceProduct}
                            quantityOfProducts={quantityOfProducts}
                        />
                    ))}
                </Box>
                <Summary priceProduct={priceProduct} />
            </Box>
            <Box sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column', gap: '12px' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
                    <Summary priceProduct={priceProduct} />
                    {removeDuplicates(buyProducts).map((e, key) => (
                        <ConfirmationProducts
                            key={key}
                            e={e}
                            priceProduct={priceProduct}
                            quantityOfProducts={quantityOfProducts}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Confirmation;
