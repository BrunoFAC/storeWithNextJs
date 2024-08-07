import { BoughtProducts, useMarketStore } from '@/store';
import { FC } from 'react';
import { resources } from '@/global';
import { Box, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const ProductsLength: FC<{ product: BoughtProducts }> = ({ product }) => {
    const theme = useMarketStore((store) => store.theme);
    const isDark = theme.type === 'dark';
    const color = isDark ? theme.primary : theme.secondary;
    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ArrowRightIcon fontSize="large" sx={{ color: color }} />
            <Typography
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    color: color,
                    display: { lg: 'flex', md: 'none', xs: 'flex' },
                }}
            >
                {product.boughtProducts.length}{' '}
                {product.boughtProducts.length > 1 ? resources.multiProducts : resources.singleProduct}
            </Typography>
            <Typography
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '0.95rem',
                    color: color,
                    display: { lg: 'none', md: 'flex', xs: 'none' },
                }}
            >
                {product.boughtProducts.length}{' '}
                {product.boughtProducts.length > 1 ? resources.multiProducts : resources.singleProduct}
            </Typography>
        </Box>
    );
};
