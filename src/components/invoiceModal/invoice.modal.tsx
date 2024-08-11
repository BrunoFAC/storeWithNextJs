import { useMarketStore, useProfileStore } from '@/store';
import { Slide, Dialog, DialogContent, Box, Typography } from '@mui/material';
import { TransitionProps } from 'notistack';
import { forwardRef, ReactElement, Ref, FC } from 'react';
import { InvoiceViews } from './invoice.views';
import { resources } from '@/global';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        // @ts-nocheck
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const InvoiceModal: FC = () => {
    const openReOrderModal = useProfileStore((store) => store.openReOrderModal);
    const theme = useMarketStore((store) => store.theme);
    const setOpenReOrderModal = useProfileStore((store) => store.setOpenReOrderModal);

    const handleClose = () => {
        setOpenReOrderModal({ open: false, order: undefined });
    };

    const isDarkTheme = theme.type === 'dark';

    return (
        <Dialog
            open={openReOrderModal?.open === true}
            sx={{ p: 0, borderRadius: '4px', m: 0 }}
            TransitionComponent={Transition}
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
                    background: isDarkTheme ? theme.primaryLight : theme.primaryLight,
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
