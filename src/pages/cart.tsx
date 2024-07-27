import { NextPage } from 'next';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { DetailedCard, BuyNowModal } from '@/components';
import { Paths } from '@/global';
import { removeDuplicates } from '@/helpers';
import { useMarketStore, useTransactionStore } from '@/store';

const Cart: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);
    const cart = useTransactionStore((store) => store.cart);
    const setShowButtonBuyNow = useTransactionStore((store) => store.setShowButtonBuyNow);
    const setOpenBuyModal = useTransactionStore((store) => store.setOpenBuyModal);
    const setOpenBuyDrawer = useTransactionStore((store) => store.setOpenBuyDrawer);

    const router = useRouter();

    useEffect(() => {
        if (!cart.length) {
            setTimeout(() => router.push(Paths.Home), 300);
        }
    }, [cart]);

    useEffect(() => {
        setSection(Paths.Cart);
        setShowButtonBuyNow(true);
        return () => {
            setShowButtonBuyNow(false);
            setOpenBuyModal({ open: false, detail: undefined });
            setOpenBuyDrawer(false);
        };
    }, []);

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '16px',
                width: '100%',
            }}
        >
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                {removeDuplicates(cart).map((e, index) => (
                    <DetailedCard key={`${e.id}-${index}`} detail={e} />
                ))}
            </Box>
            <BuyNowModal />
        </Box>
    );
};
export default Cart;
