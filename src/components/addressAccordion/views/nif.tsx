import { IMaskInput } from 'react-imask';
import { Input } from '@mui/joy';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { useBillingStore, useMarketStore, useProfileStore } from '@/store';
import { nifHelper } from '@/helpers';
import { forwardRef, FC, useMemo, useEffect } from 'react';
import { resources } from '@/global';
import { Box } from '@mui/material';
import { Images } from '@/images';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const TextMaskAdapter = forwardRef<HTMLElement, CustomProps>(function TextMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="000 000 000"
            definitions={{
                '#': /[1-9]/,
            }}
            onAccept={(value: string) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

export const Nif: FC = () => {
    const setNifValue = useBillingStore((store) => store.setNifValue);
    const setNifStatus = useBillingStore((store) => store.setNifStatus);
    const nif = useBillingStore((store) => store.billingAddress.nif.field);
    const theme = useMarketStore((store) => store.theme);
    const selected = useBillingStore((store) => store.selected);
    const profile = useProfileStore((store) => store.profile);
    const isDisable = selected === 'profile';

    const hasErrorNIF = useMemo(() => nifHelper(nif.replaceAll(' ', '')) === 'error', [nif]);
    const isValidNIF = useMemo(() => nifHelper(nif.replaceAll(' ', '')) === 'success', [nif]);

    useEffect(() => {
        setNifStatus(hasErrorNIF ? 'error' : isValidNIF ? 'success' : 'default');
    }, [hasErrorNIF, isValidNIF]);
    return (
        <Input
            disabled={isDisable}
            value={isDisable ? profile?.nif.field : nif}
            onChange={(event) => !isDisable && setNifValue(event.target.value)}
            placeholder={resources.placeholder.nif}
            startDecorator={
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Images.Portugal.src} style={{ borderRadius: '8px', width: 32, height: 20 }} />
                </Box>
            }
            endDecorator={
                <CheckCircleOutlined
                    sx={{
                        transition: '0.2s ease-in-out',
                        color: isDisable || isValidNIF ? theme.green : hasErrorNIF ? theme.red : theme.gray,
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
            slotProps={{ input: { component: TextMaskAdapter } }}
        />
    );
};
