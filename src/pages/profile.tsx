import { NextPage } from 'next';
import { useMarketStore, useProfileStore } from '@/store';
import { useEffect } from 'react';
import { Paths } from '@/global';
import { Box } from '@mui/material';
import { OrderHistory, ProfileFields } from '@/components';

const Profile: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);
    const resetTemporaryProfileDetails = useProfileStore((store) => store.resetTemporaryProfileDetails);
    useEffect(() => {
        setSection(Paths.Profile);
        resetTemporaryProfileDetails();
        return () => {
            resetTemporaryProfileDetails();
        };
    }, []);

    return (
        <>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: '12px' }}>
                <ProfileFields />
                <OrderHistory />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: '12px' }}>
                <ProfileFields width={'50%'} />
                <OrderHistory width={'50%'} />
            </Box>
        </>
    );
};
export default Profile;
