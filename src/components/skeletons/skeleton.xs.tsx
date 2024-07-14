import { Box, Skeleton } from '@mui/material';
import { FC } from 'react';

export const SkeletonXS: FC = () => {
    return (
        <Box
            sx={{ display: { xs: 'flex', md: 'none', lg: 'none' } }}
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
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    gap: '16px',
                    marginBottom: '16px',
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
