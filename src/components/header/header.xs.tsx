import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Images } from '../../../public/images';
import { DrawerHeaderXS } from './header.xs.lateralMenu';
interface HeaderXSProps {
    goTo: (link: string) => void;
}
export const HeaderXS: React.FC<HeaderXSProps> = ({ goTo }) => {
    const resources = { store: 'STORE' };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'static', alignItems: 'center' }}>
            <DrawerHeaderXS />
            <Box onClick={() => goTo('')} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Image src={Images.Head} alt="" width={35} height={35} />
            </Box>

            <Typography
                noWrap
                component="a"
                onClick={() => goTo('')}
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 600,
                    fontSize: '.9rem',
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                {resources.store}
            </Typography>
        </Box>
    );
};
