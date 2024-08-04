import { FC, useMemo } from 'react';
import { FormLabel, FormControl, Box } from '@mui/joy';
import { ProfileFieldsViews } from './profileFields.views';
import { resources } from '@/global';
import { Disclaimer } from '@/components';
import { Button } from '@mui/material';
import { useMarketStore, useProfileStore } from '@/store';
import { useSnackbar } from 'notistack';

export interface ProfileFieldsProps {
    width?: string | number;
}
export const ProfileFields: FC<ProfileFieldsProps> = ({ width }) => {
    const { enqueueSnackbar } = useSnackbar();
    const theme = useMarketStore((store) => store.theme);
    const saveProfile = useProfileStore((store) => store.saveProfile);
    const resetChanges = useProfileStore((store) => store.resetChanges);

    const fullName = useProfileStore((store) => store.fullName);
    const nifField = useProfileStore((store) => store.nifField);
    const nifStatus = useProfileStore((store) => store.nifStatus);
    const zipCodeStatus = useProfileStore((store) => store.zipCodeStatus);
    const zipCodeValue = useProfileStore((store) => store.zipCodeField);
    const profile = useProfileStore((store) => store.profile);
    const image = useProfileStore((store) => store.image);
    const address = useProfileStore((store) => store.address);

    const isDisabled = () => {
        if (nifStatus !== 'success' || zipCodeStatus !== 'success') return true;
        if (address.length < 10 || fullName.length < 3) return true;
        return false;
    };
    const isDefaultTemporary = !address && !fullName && !nifField && !zipCodeValue;

    const handleReset = () => {
        if (!profile || isDefaultTemporary) {
            enqueueSnackbar(resources.resetProfileAlertInfo, {
                variant: 'info',
            });
        } else {
            enqueueSnackbar(resources.resetProfileAlertSuccess, {
                variant: 'success',
                autoHideDuration: 3000,
            });
            resetChanges();
        }
    };

    const noChangesDone = useMemo(
        () =>
            profile?.image === image &&
            profile?.fullName === fullName &&
            profile?.address === address &&
            profile?.nif.field === nifField &&
            profile?.zipCode?.field === zipCodeValue,
        [
            profile?.image,
            image,
            profile?.fullName,
            fullName,
            profile?.address,
            address,
            profile?.nif.field,
            nifField,
            profile?.zipCode?.field,
            zipCodeValue,
        ]
    );

    const handleSave = () => {
        if (isDisabled()) {
            enqueueSnackbar(resources.saveProfileAlertError, {
                variant: 'error',
            });
        } else if (noChangesDone) {
            enqueueSnackbar(resources.saveProfileAlertInfo, {
                variant: 'info',
            });
        } else {
            enqueueSnackbar(resources.saveProfileAlertSuccess, {
                variant: 'success',
                autoHideDuration: 3000,
            });
            saveProfile();
        }
    };
    return (
        <Box
            style={{
                background: theme.fadedBackground,
                color: theme.type === 'dark' ? theme.primary : theme.darkGray,
                borderRadius: '4px',
                padding: '16px',
                gap: '16px',
                display: 'flex',
                flexDirection: 'column',
                width: width,
            }}
        >
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexDirection: 'row' }}>
                <ProfileFieldsViews.AvatarGuest />
                <FormControl
                    sx={{
                        width: '100%',
                    }}
                >
                    <FormLabel style={{ gap: 8, color: theme.light }}>
                        {resources.fullName}
                        <Disclaimer title={resources.fullNameDisclaimer} />
                    </FormLabel>
                    <ProfileFieldsViews.FullName />
                </FormControl>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexDirection: 'column' }}>
                <ProfileFieldsViews.AvatarGuest />
                <FormControl sx={{ width: '100%' }}>
                    <FormLabel style={{ gap: 8, color: theme.light }}>
                        {resources.fullName}
                        <Disclaimer title={resources.fullNameDisclaimer} />
                    </FormLabel>
                    <ProfileFieldsViews.FullName />
                </FormControl>
            </Box>
            <FormControl>
                <FormLabel style={{ gap: 8, color: theme.light }}>
                    {resources.address}
                    <Disclaimer title={resources.addressDisclaimer} />
                </FormLabel>
                <ProfileFieldsViews.Address />
            </FormControl>
            <FormControl>
                <FormLabel style={{ color: theme.light }}>{resources.zipCode}</FormLabel>
                <ProfileFieldsViews.ZipCode />
            </FormControl>
            <FormControl>
                <FormLabel style={{ color: theme.light }}>{resources.nif}</FormLabel>
                <ProfileFieldsViews.Nif />
            </FormControl>
            <Box
                sx={{
                    width: '100%',
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: theme.type === 'dark' ? theme.primary : theme.secondary,
                        borderRadius: '4px',
                        marginTop: '16px',
                    }}
                    onClick={() => handleSave()}
                    variant={'contained'}
                >
                    {resources.saveProfile}
                </Button>
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: theme.red,
                        borderRadius: '4px',
                        marginTop: '16px',
                    }}
                    onClick={() => handleReset()}
                    variant={'contained'}
                >
                    {resources.reset}
                </Button>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '16px', justifyContent: 'center' }}>
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: theme.type === 'dark' ? theme.primary : theme.secondary,
                        borderRadius: '4px',
                        width: '100%',
                        marginTop: '16px',
                    }}
                    onClick={handleSave}
                    variant={'contained'}
                >
                    {resources.saveProfile}
                </Button>
                <Button
                    style={{
                        backgroundColor: theme.light,
                        color: theme.red,
                        borderRadius: '4px',
                        width: '100%',
                        marginTop: '16px',
                    }}
                    onClick={handleReset}
                    variant={'contained'}
                >
                    {resources.reset}
                </Button>
            </Box>
        </Box>
    );
};
