import { resources } from '@/global';
import { sumFloatNumbersHelper } from '@/helpers';
import { useMarketStore } from '@/store';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { ConfirmationProductsProps } from '../confirmationProducts';

export const ConfirmationProductsXS: FC<ConfirmationProductsProps> = ({ e, priceProduct, quantityOfProducts }) => {
    const theme = useMarketStore((store) => store.theme);
    const isDarkTheme = theme.type === 'dark';
    return (
        <Box
            sx={{
                display: { lg: 'none', md: 'none', xs: 'flex' },
                flexDirection: 'column',
                alignItems: 'start',
                gap: '8px',
                background: theme.fadedBackground,
                borderRadius: '4px',
                height: 'min-content',
                width: '100%',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    width: '-webkit-fill-available',
                    alignItems: 'center',
                    backgroundColor: theme.light,
                    borderRadius: '4px 4px 0px 0px',
                    overflow: 'hidden',
                    ...(!isDarkTheme && {
                        border: `1px solid ${theme.border}`,
                    }),
                    padding: '4px 0px',
                }}
            >
                <img
                    alt=""
                    src={e?.image}
                    style={{
                        height: 200,
                        maxWidth: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '8px',
                    padding: '24px',
                }}
            >
                <Typography
                    style={{
                        color: theme.light,
                        fontSize: '1.35rem',
                    }}
                >
                    {e.title}
                </Typography>

                <Typography style={{ color: theme.light, fontSize: '1rem' }}>
                    {resources.price + ' ' + sumFloatNumbersHelper(priceProduct(e.id)) + ' ' + resources.eurSignal}
                </Typography>
                <Typography style={{ color: theme.light, fontSize: '1rem' }}>
                    {resources.quantity + ' ' + quantityOfProducts(e.id)}
                </Typography>
            </Box>
        </Box>
    );
};
