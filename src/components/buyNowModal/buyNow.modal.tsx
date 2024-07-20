import * as React from 'react';
import { DialogContent, Dialog, Typography, Box, Button, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { resources } from '../../global/resources';
import { useMarketStore } from '../../store';
import { sumFloatNumbersHelper } from '../../helpers';
import { useSnackbar } from 'notistack';
import { BuyNow } from '../buyNow/buyNow';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        // @ts-nocheck
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const BuyNowModal: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    const openBuyModal = useMarketStore((store) => store.openBuyModal);
    const cart = useMarketStore((store) => store.cart);
    const products = cart.filter((e) => e.id === openBuyModal?.detail?.id);
    const detail = cart.find((e) => e.id === openBuyModal?.detail?.id);
    const totalPrice = sumFloatNumbersHelper(products.map((e) => e.price));
    const theme = useMarketStore((store) => store.theme);
    const isDarkTheme = theme.type === 'dark';

    const removeCart = useMarketStore((store) => store.removeCart);
    const setOpenBuyModal = useMarketStore((store) => store.setOpenBuyModal);

    const handleClose = () => {
        setOpenBuyModal({ open: false, detail: undefined });
    };

    const handleBuy = () => {
        enqueueSnackbar(resources.singlePurchased, {
            variant: 'success',
        });
        handleClose();
        detail && removeCart(detail);
    };

    return (
        <Dialog
            open={openBuyModal?.open === true}
            sx={{ p: 0, m: 0 }}
            TransitionComponent={Transition}
            onClose={handleClose}
        >
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    p: 0,
                    m: 0,
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                minHeight: '250px',

                                maxWidth: '350px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: `inset 0 0 0 1px ${theme.fadedBackground}`,
                                backgroundColor: theme.light,
                            }}
                        >
                            <img
                                alt=""
                                src={detail?.image}
                                style={{
                                    width: '100%',
                                    maxWidth: '150px',
                                    padding: 2,
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '0px 0px 4px 4px',
                                background: isDarkTheme ? theme.primaryLight : theme.fadedBackground,
                                padding: '24px',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    textAlign: 'start',
                                    alignItems: 'start',
                                    paddingBottom: '16px',
                                }}
                            >
                                <Typography style={{ color: theme.light }} fontSize={20}>
                                    {detail?.title}
                                </Typography>
                                <Typography style={{ color: theme.light }}>
                                    {resources.quantity} {products?.length}
                                </Typography>
                                <Typography style={{ color: theme.light }}>
                                    {resources.price} {totalPrice} {resources.eurSignal}
                                </Typography>
                            </Box>
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                {detail && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '8px',
                                            width: '100%',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <BuyNow handleBuy={handleBuy} detail={detail} fontSize="0.850rem" />
                                    </Box>
                                )}
                                <Button
                                    onClick={handleClose}
                                    style={{
                                        backgroundColor: theme.light,
                                        color: isDarkTheme ? theme.primary : theme.secondary,
                                        width: '100%',
                                    }}
                                    variant={'contained'}
                                >
                                    {resources.cancel}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};