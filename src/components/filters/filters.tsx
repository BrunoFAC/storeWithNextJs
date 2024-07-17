import { Box } from '@mui/material';
import { FC } from 'react';
import { Products } from '../../store';
import { FiltersViews } from './filters.views';
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
