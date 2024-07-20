import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { FC } from 'react';
import { useMarketStore } from '@/store';

export const ScrollTopButton: FC = () => {
    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    const theme = useMarketStore((store) => store.theme);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={scrolled}>
            <Box position="fixed" zIndex={1} right={24} bottom={24}>
                <Fab
                    sx={{
                        flexFlow: 'column',
                        width: 64,
                        height: 64,
                        color: theme.primary,
                    }}
                    id="btnScrollTop"
                    onClick={scrollTop}
                >
                    <ArrowUpwardIcon fontSize={'large'} />
                </Fab>
            </Box>
        </Zoom>
    );
};
