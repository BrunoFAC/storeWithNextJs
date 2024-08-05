import { IMaskInput } from 'react-imask';
import { Input } from '@mui/joy';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { Box } from '@mui/material';
import { Images } from '@/images';
import { FC, forwardRef } from 'react';
import { useMarketStore, useProfileStore } from '@/store';
import { resources } from '@/global';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const TextMaskAdapter = forwardRef<HTMLElement, CustomProps>(function TextMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="0000-000"
            definitions={{
                '#': /[1-9]/,
            }}
            onAccept={(value: string) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

export const ZipCodeProfile: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const profileZipCode = useProfileStore((store) => store.profile?.zipCode.field);

    return (
        <Input
            disabled
            value={profileZipCode}
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
                        color: theme.green,
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
