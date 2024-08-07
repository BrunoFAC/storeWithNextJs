import { BoughtProducts, useMarketStore } from '@/store';
import { FC } from 'react';
import { Typography } from '@mui/material';

export const ProductsDate: FC<{ product: BoughtProducts }> = ({ product }) => {
    const theme = useMarketStore((store) => store.theme);
    const isDark = theme.type === 'dark';
    const color = isDark ? theme.primary : theme.secondary;
    return (
        <>
            <Typography
                sx={{
                    fontSize: '1rem',
                    display: { lg: 'flex', md: 'none', xs: 'none' },
                    color: color,
                }}
            >
                {product.date}
            </Typography>
            <Typography
                sx={{
                    fontSize: '0.95rem',
                    display: { lg: 'none', md: 'flex', xs: 'none' },
                    color: color,
                }}
            >
                {product.date}
            </Typography>
        </>
    );
};
