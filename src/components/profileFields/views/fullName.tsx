import { resources } from '@/global';
import { useProfileStore } from '@/store';
import { Input } from '@mui/joy';
import { FC } from 'react';

export const FullName: FC = () => {
    const setFullName = useProfileStore((store) => store.setFullName);
    const fullName = useProfileStore((store) => store.profileAddress.fullName);
    return (
        <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
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
