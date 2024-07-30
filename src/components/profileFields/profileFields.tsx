import { FC } from 'react';
import { FormLabel, FormControl, Box } from '@mui/joy';
import { ProfileFieldsViews } from './profileFields.views';
import { resources } from '@/global';
import { Disclaimer } from '@/components';
import { Avatar, Button, IconButton } from '@mui/material';
import { useMarketStore } from '@/store';

export const ProfileFields: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const color = theme.type === 'dark' ? theme.primary : theme.darkGray;
    return (
        <Box
            style={{
                backgroundColor: theme.light,
                color: theme.type === 'dark' ? theme.primary : theme.darkGray,
                borderRadius: '4px',
                padding: '16px',
                gap: '16px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box style={{ display: 'flex', gap: 16, alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                <IconButton sx={{ p: 0, display: 'flex' }}>
                    <Avatar alt={'Guest'} src="." style={{ fontSize: '1.3rem', width: '55px', height: '55px' }} />
                </IconButton>
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel style={{ gap: 8, color: color }}>
                        {resources.fullName}
                        <Disclaimer title={resources.fullNameDisclaimer} />
                    </FormLabel>
                    <ProfileFieldsViews.FullName />
                </FormControl>
            </Box>
            <FormControl>
                <FormLabel style={{ gap: 8, color: color }}>
                    {resources.address}
                    <Disclaimer title={resources.addressDisclaimer} />
                </FormLabel>
                <ProfileFieldsViews.Address />
            </FormControl>
            <FormControl>
                <FormLabel style={{ color: color }}>{resources.zipCode}</FormLabel>
                <ProfileFieldsViews.ZipCode />
            </FormControl>
            <FormControl>
                <FormLabel style={{ color: color }}>{resources.nif}</FormLabel>
                <ProfileFieldsViews.Nif />
            </FormControl>
            <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: theme.type === 'dark' ? theme.primary : theme.secondary,
                        borderRadius: '4px',
                        width: '300px',
                        marginTop: '16px',
                    }}
                    variant={'contained'}
                >
                    SAVE CHANGES
                </Button>
            </Box>
        </Box>
    );
};
