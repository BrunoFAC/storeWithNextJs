import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Products, useMarketStore } from '../../../store';
import { FavoritesIconButton } from '../../favoritesIconButton';
import { CartIconButton } from '../../cartIconButton';
import { resources } from '../../../global/resources';

interface TopStructureProps {
    product: Products;
}

export const TopStructure: FC<TopStructureProps> = ({ product }) => {
    const theme = useMarketStore((store) => store.theme);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px 0px',
                position: 'relative',
                zIndex: 1,
                flexDirection: 'row',
            }}
        >
            <Typography style={{ color: theme.primary }}>{product.price + resources.eur}</Typography>
            <Box style={{ flexDirection: 'row' }}>
                <CartIconButton cartProduct={product} />
                <FavoritesIconButton favorite={product} />
            </Box>
        </Box>
    );
};
