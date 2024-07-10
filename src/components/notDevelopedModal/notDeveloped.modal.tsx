import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useMarketStore } from '../../store';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide: React.FC = () => {
    const setOpenModal = useMarketStore((store) => store.setOpenModal);
    const openModal = useMarketStore((store) => store.openModal);

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Dialog
            open={openModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <ConstructionIcon
                    sx={{
                        bgcolor: '#1876D2',
                        color: 'white',
                        width: '64px',
                        height: '64px',
                        padding: '28px',
                        borderRadius: '100%',
                    }}
                />
                <Typography fontSize={20}>Sorry for the inconvenience.</Typography>
                <Typography>Functionality not available, under development.</Typography>
            </DialogContent>
        </Dialog>
    );
};
