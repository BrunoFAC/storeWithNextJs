import { useMarketStore } from '@/store';
import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { resources } from '@/global';

export const ProductsButton: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const setOpenModal = useMarketStore((store) => store.setOpenModal);
    const isDark = theme.type === 'dark';
    const color = isDark ? theme.primary : theme.secondary;

    return (
        <Box
            onClick={(e) => {
                e.stopPropagation();
                setOpenModal(true);
            }}
        >
            <Button
                sx={{
                    display: { md: 'flex', xs: 'none' },
                    borderColor: color,
                    color: color,
                    '&:hover': { color: color, borderColor: color },
                    '&:active': { color: color, borderColor: color },
                }}
                variant="text"
            >
                {resources.reOrder}
            </Button>
            <Button
                sx={{
                    display: { lg: 'none', md: 'none', xs: 'flex' },
                    borderColor: color,
                    color: color,
                    fontSize: '0.8rem',
                    '&:hover': { color: color, borderColor: color },
                    '&:active': { color: color, borderColor: color },
                }}
                variant="text"
            >
                {resources.reOrder}
            </Button>
        </Box>
    );
};
