import { Box } from '@mui/material';
import { FC } from 'react';
import { FiltersViews } from './filters.views';
import { Products } from '@/store';
interface FiltersProps {
    products: Products[];
}
export const Filters: FC<FiltersProps> = ({ products }) => {
    return (
        <Box style={{ justifyContent: 'end', display: 'flex' }}>
            <FiltersViews.Sort />
            <FiltersViews.PriceAndGender products={products} />
        </Box>
    );
};
