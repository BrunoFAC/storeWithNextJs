import { resources } from '@/global';
import { useProfileStore } from '@/store';
import { Input } from '@mui/joy';
import { FC } from 'react';

export const FullNameProfile: FC = () => {
    const profile = useProfileStore((store) => store.profile);

    return (
        <Input
            disabled
            value={profile?.fullName}
            placeholder={resources.placeholder.fullName}
            sx={{
                '&::before': {
                    transform: 'scaleX(0)',
                },
                transition: '0.2s ease-in-out',
            }}
        />
    );
};
