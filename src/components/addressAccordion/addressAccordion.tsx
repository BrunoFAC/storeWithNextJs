import { FC } from 'react';
import { Box, Radio, Typography, Accordion, Divider, AccordionDetails, AccordionSummary } from '@mui/material';
import { AddressAccordionViews } from './addressAccordion.views';
import { useBillingStore, useMarketStore, useProfileStore } from '@/store';
import { resources } from '@/global';

export const AddressAccordion: FC = () => {
    const selected = useBillingStore((store) => store.selected);
    const setSelected = useBillingStore((store) => store.setSelected);
    const theme = useMarketStore((store) => store.theme);
    const profile = useProfileStore((store) => store.profile);

    return (
        <div style={{ gap: '16px' }}>
            <Accordion
                disabled={profile === undefined}
                style={{ borderRadius: '4px', backgroundColor: 'white' }}
                expanded={selected === 'profile'}
            >
                <AccordionSummary
                    onClick={() => {
                        setSelected('profile');
                    }}
                >
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio
                            sx={{
                                '&.Mui-checked': {
                                    color: theme.primary,
                                },
                            }}
                            checked={selected === 'profile'}
                            value={selected === 'profile'}
                        />
                        <Typography>{resources.profileAddress}</Typography>
                    </Box>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <AddressAccordionViews.FormProfileAddress />
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderRadius: '4px' }} expanded={selected === 'new'} sx={{ marginTop: '16px' }}>
                <AccordionSummary
                    onClick={() => {
                        setSelected('new');
                    }}
                >
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio
                            checked={selected === 'new'}
                            sx={{
                                '&.Mui-checked': {
                                    color: theme.primary,
                                },
                            }}
                            value={selected === 'new'}
                        />
                        <Typography>{resources.billingAddress}</Typography>
                    </Box>
                </AccordionSummary>
                <Divider />
                <AccordionDetails style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <AddressAccordionViews.FormNewAddress />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
