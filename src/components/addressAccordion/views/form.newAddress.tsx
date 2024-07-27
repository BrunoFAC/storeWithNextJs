import { FC } from 'react';
import { FormLabel, FormControl } from '@mui/joy';
import { AddressAccordionViews } from '../addressAccordion.views';
import { resources } from '@/global';

export const FormNewAddress: FC = () => {
    return (
        <>
            <FormControl>
                <FormLabel>{resources.fullName}</FormLabel>
                <AddressAccordionViews.FullName />
            </FormControl>
            <FormControl>
                <FormLabel>{resources.address}</FormLabel>
                <AddressAccordionViews.Address />
            </FormControl>
            <FormControl>
                <FormLabel>{resources.zipCode}</FormLabel>
                <AddressAccordionViews.ZipCode />
            </FormControl>
            <FormControl>
                <FormLabel>{resources.nif}</FormLabel>
                <AddressAccordionViews.Nif />
            </FormControl>
        </>
    );
};
