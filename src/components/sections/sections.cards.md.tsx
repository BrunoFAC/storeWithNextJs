import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Sections } from './sections.types';
import { Gender, useMarketStore } from '../../store';

export const SectionsMD: FC<Sections> = ({ sections }) => {
    const router = useRouter();
    const setGender = useMarketStore((store) => store.setGender);
    const theme = useMarketStore((store) => store.theme);

    const goTo = (link: string, filter?: Gender) => {
        filter && setGender(filter);
        router.push(`/${link}`);
    };

    const resources = { visit: 'Visit' };

    return (
        <Box
            style={{
                width: '100%',
                justifyContent: 'center',
                height: '600px',
                gap: '10px',
            }}
            sx={{
                display: { lg: 'none', md: 'flex', xs: 'none' },
            }}
        >
            {sections.map((e, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: '0 0 170px',
                        transition: '0.5s ease-in-out',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        boxShadow: `1px 5px 15px ${theme.primary}`,
                        backgroundColor: theme.light,
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: e.image,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.flex = '0 0 300px';
                        e.currentTarget.style.boxShadow = `1px 3px 15px ${theme.primary}`;
                        e.currentTarget.style.transform = 'translateY(-30px)';
                        const content = e.currentTarget.querySelector('.content') as HTMLElement;
                        content.style.opacity = '1';
                        content.style.transform = 'translateY(-4%)';
                        content.style.visibility = 'visible';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.flex = '0 0 170px';
                        e.currentTarget.style.boxShadow = `1px 3px 15px ${theme.primary}`;
                        e.currentTarget.style.transform = 'translateY(0)';
                        const content = e.currentTarget.querySelector('.content') as HTMLElement;
                        content.style.opacity = '0';
                        content.style.transform = 'translateY(100%)';
                        content.style.visibility = 'hidden';
                    }}
                >
                    <Box
                        className="content"
                        sx={{
                            fontSize: '1.5rem',
                            color: theme.light,

                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '15px',
                            opacity: 0,
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'flex-end',
                            background: `linear-gradient(0deg,${theme.fadedPrimary} 0%, rgba(255, 255, 255, 0) 100%)`,
                            transform: 'translateY(100%)',
                            transition: 'opacity 0.5s ease-in-out, transform 0.5s 0.2s',
                            visibility: 'hidden',
                            textAlign: 'center',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Typography variant="h5">{e.label}</Typography>
                        <Button
                            sx={{
                                borderColor: theme.light,
                                color: theme.light,
                                '&:hover': { color: theme.light, borderColor: theme.light },
                                '&:active': { color: theme.light, borderColor: theme.light },
                            }}
                            variant="outlined"
                            onClick={() => goTo(e.redirect, e?.gender)}
                        >
                            {resources.visit}
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
