import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMarketStore } from '@/store';
import { resources } from '@/global';

export const NoProductsFound: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '50px 8px',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <HighlightOffIcon
                    style={{
                        fontSize: '75px',
                        margin: 0,
                        padding: 0,
                        color: theme.type === 'light' ? theme.darkGray : theme.lightGray,
                    }}
                />
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '8px' }}>
                    <Typography
                        style={{ color: theme.type === 'light' ? theme.darkGray : theme.lightGray, fontSize: '1.5rem' }}
                    >
                        {resources.oops}
                    </Typography>
                    <Typography style={{ color: theme.type === 'light' ? theme.darkGray : theme.lightGray }}>
                        {resources.hereToHelp}
                    </Typography>
                    <Typography
                        style={{ fontSize: '0.8rem', color: theme.type === 'light' ? theme.darkGray : theme.lightGray }}
                    >
                        {resources.checkOthers}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
