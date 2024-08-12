import * as React from 'react';
import { DialogContent, Dialog, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { resources } from '@/global';
import { useMarketStore } from '@/store';
import { TransitionSlide } from '@/transitions';

export const NotDevelopedModal: React.FC = () => {
    const setOpenModal = useMarketStore((store) => store.setOpenModal);
    const openModal = useMarketStore((store) => store.openModal);
    const theme = useMarketStore((store) => store.theme);

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Dialog open={openModal} TransitionComponent={TransitionSlide} keepMounted onClose={handleClose}>
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    textAlign: 'center',
                    alignItems: 'center',
                }}
            >
                <ConstructionIcon
                    sx={{
                        bgcolor: theme.primary,
                        color: theme.light,
                        width: '64px',
                        height: '64px',
                        padding: '28px',
                        borderRadius: '100%',
                    }}
                />
                <Typography fontSize={20}>{resources.incovinience}</Typography>
                <Typography>{resources.underDevelopment}</Typography>
            </DialogContent>
        </Dialog>
    );
};
