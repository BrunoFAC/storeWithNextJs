import { useMarketStore } from '@/store';
import { FC } from 'react';
import { resources } from '@/global';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const ProductsEmpty: FC = () => {
    const theme = useMarketStore((store) => store.theme);

    return (
        <Typography
            sx={{
                color: theme.light,
                fontSize: '1.1rem',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                height: '100%',
                padding: '24px 12px',
                gap: '8px',
            }}
        >
            <LocalShippingIcon
                fontSize="large"
                style={{
                    color: theme.light,
                }}
            />
            {resources.noOrders}
        </Typography>
    );
};
