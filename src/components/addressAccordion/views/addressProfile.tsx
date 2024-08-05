import { resources } from '@/global';
import { useProfileStore } from '@/store';
import { Input } from '@mui/joy';
import { FC } from 'react';

export const AddressProfile: FC = () => {
    const profile = useProfileStore((store) => store.profile);

    return (
        <Input
            disabled
            value={profile?.address}
            placeholder={resources.placeholder.address}
            sx={{
                '&::before': {
                    transform: 'scaleX(0)',
                },
                transition: '0.2s ease-in-out',
            }}
        />
    );
};
