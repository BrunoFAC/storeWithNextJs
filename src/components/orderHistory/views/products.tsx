import { BoughtProducts, useMarketStore, useProfileStore } from '@/store';
import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { OrderHistoryViews } from '../orderHistory.views';

export const Products: FC<{ product: BoughtProducts }> = ({ product }) => {
    const theme = useMarketStore((store) => store.theme);
    const setOpenReOrderModal = useProfileStore((store) => store.setOpenReOrderModal);

    return (
        <Button
            style={{
                height: '50px',
                backgroundColor: theme.light,
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
                width: '100%',
                justifyContent: 'space-between',
                color: theme.primary,
                textTransform: 'lowercase',
            }}
            onClick={() =>
                setOpenReOrderModal({
                    open: true,
                    order: { address: product.address, details: product.boughtProducts, date: product.date },
                })
            }
        >
            <OrderHistoryViews.ProductsLength product={product} />
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    alignItems: 'center',
                }}
            >
                <OrderHistoryViews.ProductsDate product={product} />
                <OrderHistoryViews.ProductsButton />
            </Box>
        </Button>
    );
};
