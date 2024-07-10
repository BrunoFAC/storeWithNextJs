import { Autocomplete, TextField } from '@mui/material';
import { FC } from 'react';
import { Products } from '../../store';
interface SearchBarProps {
    options: Products[];
    width?: string | number;
}
export const SearchBar: FC<SearchBarProps> = ({ options, width }) => {
    return (
        <Autocomplete
            freeSolo
            disableClearable
            options={options.map((option) => option.title)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Product"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                />
            )}
        />
    );
};
