import { FC, useState } from 'react';
import { Box, Radio, Typography, Accordion, Divider, AccordionDetails, AccordionSummary } from '@mui/material';
import { AddressAccordionViews } from './addressAccordion.views';
import { useMarketStore } from '@/store';
import { resources } from '@/global';

export const AddressAccordion: FC = () => {
    const [isSelected, setIsSelected] = useState<'profile' | 'new'>();
    const theme = useMarketStore((store) => store.theme);
    return (
        <div style={{ gap: '16px' }}>
            <Accordion
                disabled
                style={{ borderRadius: '4px', backgroundColor: 'white' }}
                expanded={isSelected === 'profile'}
            >
                <AccordionSummary
                    onClick={() => {
                        setIsSelected('profile');
                    }}
                >
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio checked={isSelected === 'profile'} value={isSelected === 'profile'} />
                        <Typography>{resources.profileAddress}</Typography>
                    </Box>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <AddressAccordionViews.Address />
                    <AddressAccordionViews.ZipCode />
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ borderRadius: '4px' }} expanded={isSelected === 'new'} sx={{ marginTop: '16px' }}>
                <AccordionSummary
                    onClick={() => {
                        setIsSelected('new');
                    }}
                >
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio
                            checked={isSelected === 'new'}
                            sx={{
                                '&.Mui-checked': {
                                    color: theme.primary,
                                },
                            }}
                            value={isSelected === 'new'}
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
