import { NextPage } from 'next';
import { useMarketStore } from '@/store';
import { useEffect } from 'react';
import { Paths } from '@/global';
import { Box } from '@mui/material';
import { ProfileFields } from '@/components';

const Profile: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection(Paths.Profile);
    }, []);

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProfileFields />
        </Box>
    );
};
export default Profile;
