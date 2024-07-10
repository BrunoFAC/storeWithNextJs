import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { FC } from 'react';

export const ScrollTopButton: FC = () => {
    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={scrolled}>
            <Box position="fixed" right={24} bottom={24}>
                <Fab
                    color="primary"
                    sx={{
                        flexFlow: 'column',
                        width: 64,
                        height: 64,
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
