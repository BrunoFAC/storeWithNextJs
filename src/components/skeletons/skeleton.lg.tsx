import { Box, Skeleton } from '@mui/material';
import { FC } from 'react';

export const SkeletonLg: FC = () => {
    return (
        <Box
            sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',
                    alignItems: 'center',
                    width: '100%',
                    gap: '8px',
                }}
            >
                <Skeleton width={'56px'} height={'25px'} style={{ borderRadius: '4px' }} variant="rectangular" />
                <Skeleton width={'122px'} height={'38px'} style={{ borderRadius: '4px' }} variant="rectangular" />
                <Skeleton width={'24px'} height={'24px'} style={{ borderRadius: '4px' }} variant="rectangular" />
            </Box>
            <Box
                sx={{
                    gap: '16px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    marginTop: '16px',
                    width: '100%',
                }}
            >
                <Skeleton variant="rectangular" style={{ borderRadius: '4px', width: '100%' }} height={402} />
                <Skeleton variant="rectangular" style={{ borderRadius: '4px', width: '100%' }} height={402} />
                <Skeleton variant="rectangular" style={{ borderRadius: '4px', width: '100%' }} height={402} />
                <Skeleton variant="rectangular" style={{ borderRadius: '4px', width: '100%' }} height={402} />
            </Box>
        </Box>
    );
};
