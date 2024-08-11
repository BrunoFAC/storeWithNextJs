import { useMarketStore, useProfileStore, useTransactionStore } from '@/store';
import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { Paths, resources } from '@/global';
import { useRouter } from 'next/router';

export const Footer: FC = () => {
    const router = useRouter();
    const openReOrderModal = useProfileStore((store) => store.openReOrderModal);
    const theme = useMarketStore((store) => store.theme);
    const setOpenDrawer = useTransactionStore((store) => store.setOpenBuyDrawer);
    const setOpenReOrderModal = useProfileStore((store) => store.setOpenReOrderModal);
    const setCart = useTransactionStore((store) => store.setCart);

    const handleClose = () => {
        setOpenReOrderModal({ open: false, order: undefined });
    };

    const handleReOrder = () => {
        setCart(openReOrderModal.order?.details ?? []);
        handleClose();
        router.push(Paths.Cart);
        setTimeout(() => {
            setOpenDrawer(true);
        }, 400);
    };
    const isDarkTheme = theme.type === 'dark';

    return (
        <Box
            style={{
                position: 'sticky',
                padding: '8px',
                bottom: 0,
                display: 'flex',
                width: '100%',
                boxShadow: `0px 0px 10px 0px ${theme.shadow}`,
                background: theme.primary,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box style={{ padding: '4px 4px 4px 16px' }}>
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: theme.red,
                        borderRadius: '4px',
                        width: '100%',
                    }}
                    variant="contained"
                    onClick={handleClose}
                >
                    {resources.cancel}
                </Button>
            </Box>
            <Box style={{ padding: '4px 16px 4px 4px' }}>
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: isDarkTheme ? theme.primary : theme.secondary,
                        borderRadius: '4px',
                        width: '100%',
                    }}
                    variant="contained"
                    onClick={handleReOrder}
                >
                    {resources.reOrder}
                </Button>
            </Box>
        </Box>
    );
};
