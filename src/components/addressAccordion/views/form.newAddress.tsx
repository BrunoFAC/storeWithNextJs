import { FC } from 'react';
import { FormLabel, FormControl } from '@mui/joy';
import { AddressAccordionViews } from '../addressAccordion.views';
import { resources } from '@/global';
import { Disclaimer } from '@/components';

export const FormNewAddress: FC = () => {
    return (
        <>
            <FormControl>
                <FormLabel style={{ gap: 8 }}>
                    {resources.fullName}
                    <Disclaimer title={resources.fullNameDisclaimer} />
                </FormLabel>
                <AddressAccordionViews.FullName />
            </FormControl>
            <FormControl>
                <FormLabel style={{ gap: 8 }}>
                    {resources.address}
                    <Disclaimer title={resources.addressDisclaimer} />
                </FormLabel>
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
