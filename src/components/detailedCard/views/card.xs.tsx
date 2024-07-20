import { FC } from 'react';
import { Products, useMarketStore } from '../../../store';
import { Box, Grow, Typography } from '@mui/material';
import { FavoritesIconButton } from '../../favoritesIconButton';
import { RatingStars } from '../../ratingStars';
import { CartButton } from '../../cartButton';
import { resources } from '../../../global';
import { BuyNow } from '../../buyNow';

export interface CardXSProps {
    detail: Products;
    handleCart: (detail: Products) => void;
}

export const CardXS: FC<CardXSProps> = ({ detail, handleCart }) => {
    const theme = useMarketStore((store) => store.theme);
    const isDarkTheme = useMarketStore((store) => store.theme.type === 'dark');

    const backgroundText = isDarkTheme
        ? `linear-gradient(60deg, ${theme.fadedPrimary} 0%, rgba(255, 255, 255, 0) 92%)`
        : `linear-gradient(60deg, ${theme.primary} 0%, ${theme.secondary} 92%)`;

    return (
        <Box
            sx={{
                display: { md: 'none', xs: 'flex' },
            }}
        >
            <Grow in={true}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                        transition: '0.3s ease-in-out',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                            background: theme.light,
                            borderRadius: '4px 4px 0px 0px',
                            overflow: 'hidden',
                            ...(!isDarkTheme && {
                                boxShadow: `inset 0 0 0 1px ${theme.gray}`,
                                borderRadius: '4px 4px 0px 0px',
                            }),
                            minHeight: '400px',
                            backgroundSize: '200px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url('${detail?.image}')`,
                        }}
                    />
                    <Box
                        style={{
                            borderRadius: '0px 0px 4px 4px',
                            background: backgroundText,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Box
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '16px',
                                    justifyContent: 'space-between',
                                    overflow: 'hidden',
                                    gap: '16px',
                                }}
                            >
                                <Box
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px',
                                        overflowY: 'auto',
                                        scrollbarWidth: 'none',
                                    }}
                                >
                                    <Box
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'start',
                                            justifyContent: 'space-between',
                                            gap: '4px',
                                        }}
                                    >
                                        <Typography
                                            style={{ color: theme.light, fontWeight: 'bold', fontSize: '20px' }}
                                        >
                                            {detail?.title}
                                        </Typography>
                                        {detail !== undefined ? (
                                            <FavoritesIconButton favorite={detail} isLightIcon />
                                        ) : null}
                                    </Box>
                                    <Typography style={{ color: theme.light, fontSize: '16px' }}>
                                        {detail?.price} {resources.eur}
                                    </Typography>
                                    <Box
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            justifyContent: 'flex-end',
                                            gap: '4px',
                                        }}
                                    >
                                        <Typography style={{ color: theme.light, fontSize: '12px' }}>
                                            {detail?.description}
                                        </Typography>
                                        <RatingStars
                                            color={theme.light}
                                            rating={detail?.rating || { count: 0, rate: 0 }}
                                        />
                                    </Box>
                                </Box>
                                <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <CartButton
                                        fontSize="0.750rem"
                                        handleCart={() => detail && handleCart(detail)}
                                        id={detail?.id || 0}
                                    />
                                    <Box style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                                        <BuyNow detail={detail} fontSize="0.750rem" width={'100%'} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grow>
        </Box>
    );
};
