import { useMarketStore, useProfileStore } from '@/store';
import { FormControl, FormLabel, Typography } from '@mui/material';
import { FC } from 'react';
import { resources } from '@/global';

export const Address: FC = () => {
    const openReOrderModal = useProfileStore((store) => store.openReOrderModal);
    const theme = useMarketStore((store) => store.theme);

    const isDarkTheme = theme.type === 'dark';
    const colorLabel = isDarkTheme ? theme.light : theme.secondary;
    const color = isDarkTheme ? theme.light : undefined;

    return (
        <>
            <Typography
                style={{
                    color: isDarkTheme ? theme.light : theme.secondary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    display: 'flex',
                    width: '100%',
                    fontSize: '16px',
                }}
            >
                {resources.address}
            </Typography>
            <FormControl
                style={{
                    gap: '16px',
                    padding: '8px',
                    width: '-webkit-fill-available',
                    ...(!isDarkTheme && { border: `1px solid ${theme.border}` }),
                    background: isDarkTheme ? theme.fadedBackground : theme.light,
                    borderRadius: '4px',
                }}
            >
                <div
                    style={{
                        color: color,
                        fontWeight: 'bold',
                    }}
                >
                    <FormLabel style={{ color: colorLabel, fontWeight: 'bold' }}>{resources.fullName}: </FormLabel>
                    <FormLabel style={{ color: color, wordBreak: 'break-word' }}>
                        {openReOrderModal.order?.address?.fullName}
                    </FormLabel>
                </div>

                <div
                    style={{
                        color: color,
                        fontWeight: 'bold',
                    }}
                >
                    <FormLabel style={{ color: colorLabel, fontWeight: 'bold' }}>{resources.address}: </FormLabel>
                    <FormLabel style={{ color: color, wordBreak: 'break-word' }}>
                        {openReOrderModal.order?.address?.address}
                    </FormLabel>
                </div>
                <div
                    style={{
                        color: color,
                        fontWeight: 'bold',
                    }}
                >
                    <FormLabel style={{ color: colorLabel, fontWeight: 'bold' }}>{resources.zipCode}: </FormLabel>
                    <FormLabel style={{ color: color, wordBreak: 'break-word' }}>
                        {openReOrderModal.order?.address?.zipCode.field}
                    </FormLabel>
                </div>
                <div
                    style={{
                        color: color,
                        fontWeight: 'bold',
                    }}
                >
                    <FormLabel style={{ color: colorLabel, fontWeight: 'bold' }}>{resources.nif}: </FormLabel>
                    <FormLabel style={{ color: color, wordBreak: 'break-word' }}>
                        {openReOrderModal.order?.address?.nif.field}
                    </FormLabel>
                </div>
                <div
                    style={{
                        color: color,
                        fontWeight: 'bold',
                    }}
                >
                    <FormLabel style={{ color: colorLabel, fontWeight: 'bold' }}>{resources.date}: </FormLabel>
                    <FormLabel style={{ color: color, wordBreak: 'break-word' }}>
                        {openReOrderModal.order?.date}
                    </FormLabel>
                </div>
            </FormControl>
        </>
    );
};
