import { BoughtProducts } from '@/store';
import { FC } from 'react';
import { resources } from '@/global';
import { Box, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const ProductsLength: FC<{ product: BoughtProducts }> = ({ product }) => {
    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <ArrowRightIcon fontSize="large" />
            <Typography
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '1rem',
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
                    display: { lg: 'none', md: 'flex', xs: 'none' },
                }}
            >
                {product.boughtProducts.length}{' '}
                {product.boughtProducts.length > 1 ? resources.multiProducts : resources.singleProduct}
            </Typography>
        </Box>
    );
};
