import { useMarketStore } from '@/store';
import { Box } from '@mui/material';
import { FC } from 'react';

export const DividerStylized: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    return (
        <Box
            style={{
                width: '100%',
                height: '1px',
                background: theme.divider,
            }}
        />
    );
};
