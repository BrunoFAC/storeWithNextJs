import { resources } from '@/global';
import { sumFloatNumbersHelper } from '@/helpers';
import { useMarketStore } from '@/store';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { ConfirmationProductsProps } from '../confirmationProducts';

export const ConfirmationProductsMD: FC<ConfirmationProductsProps> = ({ e, priceProduct, quantityOfProducts }) => {
    const theme = useMarketStore((store) => store.theme);
    const isDarkTheme = theme.type === 'dark';
    return (
        <Box
            sx={{
                display: { lg: 'none', md: 'flex', xs: 'none' },
                flexDirection: 'row',
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
                    width: '40%',
                    alignItems: 'center',
                    backgroundColor: theme.light,
                    borderRadius: '4px 0px 0px 4px',
                    overflow: 'hidden',
                    ...(!isDarkTheme && {
                        border: '1px solid rgb(160, 179, 194)',
                    }),
                    padding: '4px',
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
                    width: '60%',
                    padding: '12px',
                }}
            >
                <Typography
                    style={{
                        color: theme.light,
                        fontSize: '1rem',
                    }}
                >
                    {e.title}
                </Typography>

                <Typography style={{ color: theme.light, fontSize: '0.9rem' }}>
                    {resources.price + ' ' + sumFloatNumbersHelper(priceProduct(e.id)) + ' ' + resources.eurSignal}
                </Typography>
                <Typography style={{ color: theme.light, fontSize: '0.9rem' }}>
                    {resources.quantity + ' ' + quantityOfProducts(e.id)}
                </Typography>
            </Box>
        </Box>
    );
};
