import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Paths, resources } from '@/global';
import { Images } from '@/images';
import { useMarketStore } from '@/store';
import { DrawerHeaderXS } from './header.xs.lateralMenu';
interface HeaderXSProps {
    goTo: (link: Paths) => void;
}
export const HeaderXS: React.FC<HeaderXSProps> = ({ goTo }) => {
    const theme = useMarketStore((store) => store.theme);

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'static', alignItems: 'center' }}>
            <DrawerHeaderXS />
            <Box onClick={() => goTo(Paths.Home)} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Image src={theme.type === 'dark' ? Images.HeadLighter : Images.Head} alt="" width={35} height={35} />
            </Box>

            <Typography
                noWrap
                component="a"
                onClick={() => goTo(Paths.Home)}
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    fontSize: '.9rem',
                    letterSpacing: '.1rem',
                    textDecoration: 'none',
                }}
            >
                {resources.store}
            </Typography>
        </Box>
    );
};
