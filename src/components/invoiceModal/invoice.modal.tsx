import { useMarketStore, useProfileStore } from '@/store';
import { Dialog, DialogContent, Box } from '@mui/material';
import { FC } from 'react';
import { InvoiceViews } from './invoice.views';
import { TransitionSlide } from '@/transitions';

export const InvoiceModal: FC = () => {
    const openReOrderModal = useProfileStore((store) => store.openReOrderModal);
    const theme = useMarketStore((store) => store.theme);
    const setOpenReOrderModal = useProfileStore((store) => store.setOpenReOrderModal);

    const handleClose = () => {
        setOpenReOrderModal({ open: false, order: undefined });
    };

    return (
        <Dialog
            open={openReOrderModal?.open === true}
            sx={{ p: 0, borderRadius: '4px', m: 0 }}
            TransitionComponent={TransitionSlide}
            onClose={handleClose}
        >
            <DialogContent
                sx={{
                    p: 0,
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'auto',
                    overflowX: 'hidden',
                    height: '100%',
                    background: theme.primaryLight,
                }}
            >
                <InvoiceViews.Header />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'start',
                        alignItems: 'start',
                        padding: '16px',
                        width: '-webkit-fill-available',
                        gap: '8px',
                    }}
                >
                    <InvoiceViews.Address />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'start',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <InvoiceViews.Products />
                    <InvoiceViews.Footer />
                </Box>
            </DialogContent>
        </Dialog>
    );
};
