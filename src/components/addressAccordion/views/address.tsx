import { resources } from '@/global';
import { useBillingStore, useProfileStore } from '@/store';
import { Input } from '@mui/joy';
import { FC } from 'react';

export const Address: FC = () => {
    const setAddress = useBillingStore((store) => store.setAddress);
    const address = useBillingStore((store) => store.billingAddress.address);
    const selected = useBillingStore((store) => store.selected);
    const profile = useProfileStore((store) => store.profile);
    const isDisable = selected === 'profile';

    return (
        <Input
            disabled={isDisable}
            value={isDisable ? profile?.address : address}
            onChange={(event) => setAddress(event.target.value)}
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
