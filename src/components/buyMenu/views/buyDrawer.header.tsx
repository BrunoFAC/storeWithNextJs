import { Box, Typography } from '@mui/material';
import { resources } from '../../../global/resources';
import { useMarketStore } from '../../../store';
import { FC } from 'react';

export interface HeaderProps {
    width: string;
}
export const Header: FC<HeaderProps> = ({ width }) => {
    const theme = useMarketStore((store) => store.theme);
    return (
        <Box
            sx={{
                flexGrow: 1,
                padding: '16px',
                height: '48.5px',
                backgroundColor: theme.primary,
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                width: width,
            }}
        >
            <Typography style={{ color: theme.light, fontWeight: 'bold', letterSpacing: 0.3 }}>
                {resources.summary}
            </Typography>
        </Box>
    );
};
