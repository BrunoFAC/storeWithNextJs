import { useMarketStore } from '@/store';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { resources } from '@/global';

export const Header: FC = () => {
    const theme = useMarketStore((store) => store.theme);

    const isDarkTheme = theme.type === 'dark';

    return (
        <Typography
            style={{
                color: theme.light,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'center',
                top: 0,
                zIndex: 1,
                width: '-webkit-fill-available',
                padding: '8px',
                fontSize: '30px',
                position: 'sticky',
                background: isDarkTheme ? theme.primary : theme.fadedBackground,
            }}
        >
            {resources.invoice}
        </Typography>
    );
};
