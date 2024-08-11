import { removeDuplicates } from '@/helpers';
import { useMarketStore, useProfileStore } from '@/store';
import { Box, Typography } from '@mui/material';
import { ConfirmationProducts } from '@/components';
import { FC } from 'react';
import { resources } from '@/global';

export const Products: FC = () => {
    const openReOrderModal = useProfileStore((store) => store.openReOrderModal);
    const theme = useMarketStore((store) => store.theme);

    const priceProduct = (id?: number) =>
        openReOrderModal.order?.details.filter((c) => !id || c.id === id)?.map((cart) => cart.price) ?? [];

    const quantityOfProducts = (id: number) => {
        return openReOrderModal.order?.details.filter((e) => e.id === id).length ?? 0;
    };

    const isDarkTheme = theme.type === 'dark';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: '16px',
                padding: '0 16px 16px',
            }}
        >
            <Typography
                style={{
                    color: isDarkTheme ? theme.light : theme.secondary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    width: '100%',
                    fontSize: '16px',
                }}
            >
                {resources.multiProducts}
            </Typography>
            {removeDuplicates(openReOrderModal.order?.details ?? [])?.map((e, key) => (
                <ConfirmationProducts
                    key={key}
                    e={e}
                    hasHigherFontSize
                    priceProduct={priceProduct}
                    quantityOfProducts={quantityOfProducts}
                />
            ))}
        </Box>
    );
};
