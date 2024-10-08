import { Box, Fab, useScrollTrigger } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FC } from 'react';
import { useMarketStore, useTransactionStore } from '@/store';

export const FloatButton: FC = () => {
    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
    const section = useMarketStore((store) => store.section?.toLocaleLowerCase());
    const theme = useMarketStore((store) => store.theme);
    const setOpen = useTransactionStore((store) => store.setOpenBuyDrawer);

    const toggleDrawer = () => () => {
        setOpen(true);
    };

    return (
        <>
            {section === 'cart' && (
                <Box
                    position="fixed"
                    sx={{
                        bottom: scrolled ? 100 : 24,
                        transition: '0.2s ease-in-out',
                    }}
                    zIndex={2}
                    right={24}
                >
                    <Fab
                        sx={{
                            flexFlow: 'column',
                            width: 64,
                            height: 64,
                            color: theme.primary,
                        }}
                        onClick={toggleDrawer()}
                    >
                        <ShoppingCartIcon />
                    </Fab>
                </Box>
            )}
        </>
    );
};
