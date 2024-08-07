import { BoughtProducts } from '@/store';
import { FC } from 'react';
import { Typography } from '@mui/material';

export const ProductsDate: FC<{ product: BoughtProducts }> = ({ product }) => {
    return (
        <>
            <Typography
                sx={{
                    fontSize: '1rem',
                    display: { lg: 'flex', md: 'none', xs: 'none' },
                }}
            >
                {product.date}
            </Typography>
            <Typography
                sx={{
                    fontSize: '0.95rem',
                    display: { lg: 'none', md: 'flex', xs: 'none' },
                }}
            >
                {product.date}
            </Typography>
        </>
    );
};
