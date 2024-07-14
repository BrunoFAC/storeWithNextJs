import { Box } from '@mui/material';
import { FC } from 'react';
import { FiltersPriceAndGender, FiltersSort } from '.';
import { Products } from '../../store';
interface FiltersProps {
    products: Products[];
}
export const Filters: FC<FiltersProps> = ({ products }) => {
    return (
        <Box style={{ justifyContent: 'end', display: 'flex' }}>
            <FiltersSort />
            <FiltersPriceAndGender products={products} />
        </Box>
    );
};
