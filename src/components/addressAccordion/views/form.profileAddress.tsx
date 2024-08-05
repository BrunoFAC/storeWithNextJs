import { FC } from 'react';
import { FormLabel, FormControl } from '@mui/joy';
import { AddressAccordionViews } from '../addressAccordion.views';
import { resources } from '@/global';
import { Disclaimer } from '@/components';

export const FormProfileAddress: FC = () => {
    return (
        <>
            <FormControl>
                <FormLabel style={{ gap: 8 }}>
                    {resources.fullName}
                    <Disclaimer title={resources.fullNameDisclaimer} />
                </FormLabel>
                <AddressAccordionViews.FullNameProfile />
            </FormControl>
            <FormControl>
                <FormLabel style={{ gap: 8 }}>
                    {resources.address}
                    <Disclaimer title={resources.addressDisclaimer} />
                </FormLabel>
                <AddressAccordionViews.AddressProfile />
            </FormControl>
            <FormControl>
                <FormLabel>{resources.zipCode}</FormLabel>
                <AddressAccordionViews.ZipCodeProfile />
            </FormControl>
            <FormControl>
                <FormLabel>{resources.nif}</FormLabel>
                <AddressAccordionViews.NifProfile />
            </FormControl>
        </>
    );
};
