import { FC } from 'react';
import { Products, useMarketStore } from '../../../store';
import { Box, Grow, Typography } from '@mui/material';
import { FavoritesIconButton } from '../../favoritesIconButton';
import { RatingStars } from '../../ratingStars';
import { CartButton } from '../../cartButton';
import { resources } from '../../../global/resources';
export interface CardXSProps {
    detail: Products;
    handleCart: (detail: Products) => void;
}
export const CardMD: FC<CardXSProps> = ({ detail, handleCart }) => {
    const theme = useMarketStore((store) => store.theme);
    const isDarkTheme = useMarketStore((store) => store.theme.type === 'dark');

    const backgroundText = isDarkTheme
        ? `linear-gradient(60deg, ${theme.fadedPrimary} 0%, rgba(255, 255, 255, 0) 92%)`
        : `linear-gradient(60deg, ${theme.primary} 0%, ${theme.secondary} 92%)`;

    return (
        <Box
            sx={{
                display: { md: 'flex', xs: 'none' },
            }}
        >
            <Grow in={true}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '500px',
                        width: '100%',
                        borderRadius: '4px',
                        alignItems: 'center',
                        transition: '0.3s ease-in-out',
                    }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            height: '100%',
                            background: theme.light,
                            borderRadius: '4px 0px 0px 4px',
                            overflow: 'hidden',
                            ...(!isDarkTheme && {
                                boxShadow: `inset 0 0 0 1px ${theme.gray}`,
                                borderRadius: '4px 0px 0px 4px',
                            }),
                        }}
                    >
                        <Box
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    transition: '0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.3)',
                                    },
                                }}
                            >
                                <img alt="" src={detail?.image} style={{ height: 260, objectFit: 'contain' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        style={{
                            borderRadius: '0px 4px 4px 0px',
                            background: backgroundText,
                            width: '50%',
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
                                    height: '500px',
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
                                            style={{ color: theme.light, fontWeight: 'bold', fontSize: '24px' }}
                                        >
                                            {detail?.title}
                                        </Typography>
                                        {detail !== undefined ? (
                                            <FavoritesIconButton favorite={detail} isLightIcon />
                                        ) : null}
                                    </Box>
                                    <Typography style={{ color: theme.light, fontSize: '20px' }}>
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
                                        <Typography style={{ color: theme.light, fontSize: '16px' }}>
                                            {detail?.description}
                                        </Typography>
                                        <RatingStars
                                            color={theme.light}
                                            rating={detail?.rating || { count: 0, rate: 0 }}
                                        />
                                    </Box>
                                </Box>
                                <CartButton handleCart={() => detail && handleCart(detail)} id={detail?.id || 0} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grow>
        </Box>
    );
};