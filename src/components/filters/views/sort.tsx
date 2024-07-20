import { Box, Button, Fade, Popper, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { FiltersValue, useMarketStore } from '../../../store';
import { resources } from '../../../global';

export const Sort: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useMarketStore((store) => store.theme);
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

    const handleOnClick = (filter: FiltersValue, click: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleClick(click);
        setIsLoading(true);
        setTimeout(() => {
            setSort(filter);
            setIsLoading(false);
        }, 150);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isDarkMode = theme.type === 'dark';
    const isDefault = sort === FiltersValue.RELEVANCE;

    const themeDark = isDefault ? theme.darkGray : theme.light;
    const themeLight = isDefault ? theme.darkGray : theme.primary;
    const colorSortBy = isDarkMode ? themeDark : themeLight;

    const backgroundColorSelected = isDarkMode ? theme.light : theme.primary;
    const colorTypographySelected = isDarkMode ? theme.primary : theme.light;
    const backgroundColorDefault = 'transparent';

    const colorTypographyDefault = theme.darkGray;
    const borderColor = theme.darkGray;

    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                <Typography style={{ color: colorSortBy }}>{resources.sortBy}</Typography>

                <Button
                    variant={isDefault ? 'outlined' : 'contained'}
                    style={{
                        width: 130,
                        backgroundColor: isDefault ? backgroundColorDefault : backgroundColorSelected,
                        color: isDefault ? colorTypographyDefault : colorTypographySelected,
                        ...(isDefault && { borderColor }),
                        textTransform: 'lowercase',
                    }}
                    onClick={handleClick}
                >
                    <Typography
                        style={{
                            textTransform: 'capitalize',
                        }}
                    >
                        {sort}
                    </Typography>
                </Button>

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
                                    backgroundColor: theme.light,
                                    boxShadow: `1px 1px 3px 0px ${theme.shadow}`,

                                    borderRadius: '4px',
                                }}
                            >
                                {filtersSort.map((filter, key) => {
                                    return (
                                        <Box
                                            key={`${filter + '-' + key}`}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box
                                                onClick={(click) => {
                                                    handleOnClick(filter, click);
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
