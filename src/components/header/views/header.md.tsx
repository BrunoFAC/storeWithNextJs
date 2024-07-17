import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { Images } from '../../../../public/images';
import { useMarketStore } from '../../../store';
import { resources } from '../../../global/resources';

interface HeaderMDProps {
    pages: string[];
    goTo: (link: string) => void;
}
export const HeaderMD: React.FC<HeaderMDProps> = ({ pages, goTo }) => {
    const theme = useMarketStore((store) => store.theme);

    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    gap: '8px',
                }}
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                onClick={() => goTo('')}
            >
                <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                    <Image
                        src={theme.type === 'dark' ? Images.HeadLighter : Images.Head}
                        alt=""
                        width={45}
                        height={45}
                    />
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        textDecoration: 'none',
                    }}
                >
                    {resources.store}
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, index) => (
                    <Button
                        key={`${index}-${page}`}
                        onClick={() => {
                            goTo(page);
                        }}
                        sx={{
                            my: 2,
                            color: theme.light,
                            display: 'block',
                        }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
        </>
    );
};
