import { FC } from 'react';
import { FormLabel, FormControl } from '@mui/joy';
import { AddressAccordionViews } from '../addressAccordion.views';
import { resources } from '@/global';
import { Disclaimer } from '@/components';
import { Box, Checkbox } from '@mui/material';
import { useBillingStore, useMarketStore } from '@/store';

export const FormNewAddress: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const isSelectedAsProfile = useBillingStore((store) => store.isSelectedAsProfile);
    const isNew = useBillingStore((store) => store.selected === 'new');
    const setIsSelectedAsProfile = useBillingStore((store) => store.setIsSelectedAsProfile);
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
            {isNew && (
                <FormControl sx={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                    <Checkbox
                        sx={{
                            '&.Mui-checked': {
                                color: theme.primary,
                            },
                        }}
                        onChange={() => setIsSelectedAsProfile(!isSelectedAsProfile)}
                        value={isSelectedAsProfile}
                        checked={isSelectedAsProfile}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center' }}>
                        <FormLabel sx={{ height: 'min-content', margin: 0 }}>{'Save as profile address'}</FormLabel>
                    </Box>
                </FormControl>
            )}
        </>
    );
};
