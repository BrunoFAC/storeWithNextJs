import { useMarketStore } from '@/store';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { resources } from '@/global';

export const ProductsButton: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const isDark = theme.type === 'dark';
    const color = isDark ? theme.primary : theme.secondary;

    return (
        <Box style={{ paddingRight: '4px' }}>
            <Typography
                sx={{
                    display: { lg: 'flex', md: 'none', xs: 'none' },
                    color: color,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase',
                }}
            >
                {resources.reOrder}
            </Typography>
            <Typography
                sx={{
                    display: { lg: 'none', md: 'flex', xs: 'none' },
                    color: color,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    textTransform: 'uppercase',
                }}
            >
                {resources.reOrder}
            </Typography>
            <Typography
                sx={{
                    display: { lg: 'none', md: 'none', xs: 'flex' },
                    color: color,
                    fontSize: '0.8rem',
                    lineHeight: 1.75,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

                    textTransform: 'uppercase',
                }}
            >
                {resources.reOrder}
            </Typography>
        </Box>
    );
};
