import { resources } from '@/global';
import { sumFloatNumbersHelper } from '@/helpers';
import { useMarketStore, useTransactionStore } from '@/store';
import { Box, Typography } from '@mui/material';
import { ReactNode, FC } from 'react';

export interface StructureProps {
    children: ReactNode;
    fontSize?: string;
}
export const Structure: FC<StructureProps> = ({ children, fontSize }) => {
    const theme = useMarketStore((store) => store.theme);
    const cart = useTransactionStore((store) => store.cart);

    const priceArray = cart.map((e) => e.price);
    const totalCartProducts = cart.length;
    const isDarkTheme = theme.type === 'dark';
    const colorTypography = isDarkTheme ? theme.light : theme.darkGray;

    return (
        <Box
            sx={{
                flexGrow: 1,
                padding: '96px 16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Typography style={{ color: colorTypography, fontWeight: 'bold', letterSpacing: 0.3, fontSize }}>
                    {resources.totalOfItems}
                </Typography>
                <Typography style={{ color: colorTypography, fontSize }}>
                    {totalCartProducts} {totalCartProducts > 1 ? resources.multiProducts : resources.singleProduct}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Typography style={{ color: colorTypography, fontWeight: 'bold', letterSpacing: 0.3, fontSize }}>
                    {resources.totalPrice}
                </Typography>
                <Typography style={{ color: colorTypography, fontSize }}>
                    {sumFloatNumbersHelper(priceArray)} {resources.eurSignal}
                </Typography>
            </Box>

            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    overflowY: 'auto',
                }}
            >
                <Typography style={{ color: colorTypography, fontWeight: 'bold', letterSpacing: 0.3, fontSize }}>
                    {resources.products}
                </Typography>
                {children}
            </Box>
        </Box>
    );
};
