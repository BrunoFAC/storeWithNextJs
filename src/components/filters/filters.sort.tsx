import { Box, Fade, Popper, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { FiltersValue, useMarketStore } from '../../store';

export const FiltersSort: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const filtersSort = useMarketStore((store) => store.filtersSort);
    const sort = useMarketStore((store) => store.filters?.sort);
    const setSort = useMarketStore((store) => store.setSort);
    const setIsLoading = useMarketStore((store) => store.setIsLoading);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = anchorEl !== null;

    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setAnchorEl(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                <Typography style={{ color: '#545D65' }}>Sort by: </Typography>
                <Box
                    sx={{
                        width: 120,
                        backgroundColor: 'transparent',
                        border: `1px solid ${open ? '#1876D2' : '#A0B3C2'}`,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={handleClick}
                >
                    <Box onClick={handleClick} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <Typography style={{ color: '#545D65', cursor: 'pointer', padding: '4px' }}>{sort}</Typography>
                    </Box>
                </Box>
                <Popper
                    ref={ref}
                    open={open}
                    style={{ zIndex: 2 }}
                    placement="bottom-end"
                    anchorEl={anchorEl}
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box
                                sx={{
                                    width: 125,
                                    backgroundColor: 'white',
                                    boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.6)',

                                    borderRadius: '4px',
                                }}
                            >
                                {filtersSort.map((filter, key) => {
                                    return (
                                        <Box
                                            key={key}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box
                                                onClick={(click) => {
                                                    handleClick(click);
                                                    setIsLoading(true);
                                                    setTimeout(() => {
                                                        setSort(filter);
                                                        setIsLoading(false);
                                                    }, 150);
                                                }}
                                                style={{
                                                    display: 'flex',
                                                    height: '100%',
                                                    margin: 0,
                                                    borderRadius: '4px',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography
                                                    style={{
                                                        padding: '6px 12px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {filter}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Fade>
                    )}
                </Popper>
            </Box>
        </Box>
    );
};
