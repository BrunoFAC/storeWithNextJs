import { Input } from '@mui/joy';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { useMarketStore, useProfileStore } from '@/store';
import { FC } from 'react';
import { resources } from '@/global';
import { Box } from '@mui/material';
import { Images } from '@/images';
import { NifMaskAdapter } from '@/masks';

export const NifProfile: FC = () => {
    const theme = useMarketStore((store) => store.theme);
    const profile = useProfileStore((store) => store.profile);

    return (
        <Input
            disabled
            value={profile?.nif.field}
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
            slotProps={{ input: { component: NifMaskAdapter } }}
        />
    );
};
