import { Box } from '@mui/material';
import { FC } from 'react';
import { FiltersPriceAndGender, FiltersSort, SearchBar } from '.';
import { Products } from '../../store';
interface FiltersProps {
    products: Products[];
}
export const Filters: FC<FiltersProps> = ({ products }) => {
    return (
        <>
            <SearchBar options={products} />
            <Box style={{ justifyContent: 'end', display: 'flex', paddingTop: '16px' }}>
                <FiltersSort />
                <FiltersPriceAndGender products={products} />
            </Box>
        </>
    );
};
