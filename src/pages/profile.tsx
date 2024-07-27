import { NextPage } from 'next';
import { useMarketStore } from '@/store';
import { useEffect } from 'react';
import { Paths } from '@/global';
import { Input } from '@mui/material';

const Profile: NextPage = () => {
    const theme = useMarketStore((store) => store.theme);
    const isDark = theme.type === 'dark';
    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection(Paths.Profile);
    }, []);

    return (
        <div>
            <Input sx={{ borderColor: isDark ? theme.light : theme.primary }} />
        </div>
    );
};
export default Profile;
