import { resources } from '@/global';
import { useBillingStore, useProfileStore } from '@/store';
import { Input } from '@mui/joy';
import { FC } from 'react';

export const FullName: FC = () => {
    const setFullName = useBillingStore((store) => store.setFullName);
    const fullName = useBillingStore((store) => store.billingAddress.fullName);
    const selected = useBillingStore((store) => store.selected);
    const profile = useProfileStore((store) => store.profile);
    const isDisable = selected === 'profile';

    return (
        <Input
            disabled={isDisable}
            value={isDisable ? profile?.fullName : fullName}
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
