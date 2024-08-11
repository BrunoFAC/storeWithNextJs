import { useBillingStore, useMarketStore } from '@/store';
import { FC } from 'react';
import { resources } from '@/global';
import { Box, Typography } from '@mui/material';
import { DividerStylized, ReOrderModal } from '@/components';
import { OrderHistoryViews } from './orderHistory.views';
export interface OrderHistoryProps {
    width?: string;
}
export const OrderHistory: FC<OrderHistoryProps> = ({ width }) => {
    const boughtProducts = useBillingStore((store) => store.boughtProducts);
    const theme = useMarketStore((store) => store.theme);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: theme.fadedBackground,
                width: width ?? '100%',
                borderRadius: '4px',
                height: 'min-content',
            }}
        >
            <Typography style={{ color: theme.light, fontSize: '2rem', fontWeight: 'bold', padding: '16px' }}>
                {resources.orderHistory}
            </Typography>
            <DividerStylized />
            {!boughtProducts.length ? (
                <OrderHistoryViews.ProductsEmpty />
            ) : (
                <Box style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap: '16px' }}>
                    {boughtProducts.map((product, index) => {
                        return <OrderHistoryViews.Products key={index} product={product} />;
                    })}
                </Box>
            )}
            <ReOrderModal />
        </Box>
    );
};
