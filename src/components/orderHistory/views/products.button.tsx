import { useMarketStore } from '@/store';
import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { resources } from '@/global';

export const ProductsButton: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const setOpenModal = useMarketStore((store) => store.setOpenModal);

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
                    borderColor: theme.primary,
                    color: theme.primary,
                    '&:hover': { color: theme.primary, borderColor: theme.primary },
                    '&:active': { color: theme.primary, borderColor: theme.primary },
                }}
                variant="text"
            >
                {resources.reOrder}
            </Button>
            <Button
                sx={{
                    display: { lg: 'none', md: 'none', xs: 'flex' },
                    borderColor: theme.primary,
                    color: theme.primary,
                    fontSize: '0.8rem',
                    '&:hover': { color: theme.primary, borderColor: theme.primary },
                    '&:active': { color: theme.primary, borderColor: theme.light },
                }}
                variant="text"
            >
                {resources.reOrder}
            </Button>
        </Box>
    );
};
