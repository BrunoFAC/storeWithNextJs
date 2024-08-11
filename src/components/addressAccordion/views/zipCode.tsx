import { Input } from '@mui/joy';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { Box } from '@mui/material';
import { Images } from '@/images';
import { FC, useEffect, useMemo } from 'react';
import { useBillingStore, useMarketStore } from '@/store';
import { zipCodeHelper } from '@/helpers';
import { resources } from '@/global';
import { ZipCodeMaskAdapter } from '@/masks';

export const ZipCode: FC = () => {
    const setZipCodeValue = useBillingStore((store) => store.setZipCodeValue);
    const setZipCodeStatus = useBillingStore((store) => store.setZipCodeStatus);
    const zipCode = useBillingStore((store) => store.billingAddress.zipCode.field);
    const theme = useMarketStore((store) => store.theme);
    const hasErrorZipCode = useMemo(() => zipCodeHelper(zipCode) === 'error', [zipCode]);
    const isValidZipCode = useMemo(() => zipCodeHelper(zipCode) === 'success', [zipCode]);
    useEffect(() => {
        setZipCodeStatus(hasErrorZipCode ? 'error' : isValidZipCode ? 'success' : 'default');
    }, [hasErrorZipCode, isValidZipCode]);

    return (
        <Input
            value={zipCode}
            onChange={(event) => setZipCodeValue(event.target.value)}
            placeholder={resources.placeholder.zipCode}
            startDecorator={
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Images.Portugal.src} style={{ borderRadius: '8px', width: 32, height: 20 }} />
                </Box>
            }
            endDecorator={
                <CheckCircleOutlined
                    sx={{
                        transition: '0.2s ease-in-out',
                        color: isValidZipCode ? theme.green : hasErrorZipCode ? theme.red : theme.gray,
                    }}
                />
            }
            sx={{
                width: '300px',
                maxWidth: '100%',
                '&::before': {
                    transform: 'scaleX(0)',
                },
            }}
            slotProps={{ input: { component: ZipCodeMaskAdapter } }}
        />
    );
};
