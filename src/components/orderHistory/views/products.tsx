import { BoughtProducts, useMarketStore } from '@/store';
import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { OrderHistoryViews } from '../orderHistory.views';

export const Products: FC<{ product: BoughtProducts }> = ({ product }) => {
    const theme = useMarketStore((store) => store.theme);
    const setOpenModal = useMarketStore((store) => store.setOpenModal);

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
            onClick={() => setOpenModal(true)}
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
