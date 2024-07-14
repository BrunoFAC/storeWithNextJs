import { Box, Button, Chip, Divider, Fade, IconButton, Popper, Slider, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { Gender, Products, useMarketStore } from '../../store';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import FilterAltOutlineIcon from '@mui/icons-material/FilterAlt';
interface SearchBarProps {
    products: Products[];
}

export const FiltersPriceAndGender: FC<SearchBarProps> = ({ products }) => {
    const numbers = products.map((e) => e.price);
    const findMinNumber = (): number => {
        if (numbers.length > 0) {
            return numbers.reduce((min, current) => (current < min ? current : min), numbers[0]);
        }
        return 0;
    };

    const findMaxNumber = (): number => {
        if (numbers.length > 0) {
            return numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
        }

        return 0;
    };
    const theme = useMarketStore((store) => store.theme);

    const section = useMarketStore((store) => store?.section);
    const filteredPrice = useMarketStore((store) => store.filters?.price);
    const filteredGender = useMarketStore((store) => store.filters?.gender);
    const defaultRange = [findMinNumber(), findMaxNumber()];
    const defaultPrice = filteredPrice ?? defaultRange;
    const setPrice = useMarketStore((store) => store.setPrice);
    const setGender = useMarketStore((store) => store.setGender);
    const setIsLoading = useMarketStore((store) => store.setIsLoading);
    const [anchorPriceEl, setAnchorPriceEl] = useState<null | HTMLElement>(null);
    const [priceLocal, setPriceLocal] = useState<number[] | undefined>(defaultPrice);
    const [genderLocal, setGenderLocal] = useState<Gender | undefined>(filteredGender);
    const refPrice = useRef<HTMLDivElement>(null);

    const openPrice = anchorPriceEl !== null;
    const hasFilter = filteredPrice !== undefined || filteredGender !== undefined;

    const hasEqualsPrices = (firstPrice?: number[], secondPrice?: number[]): boolean => {
        if (!firstPrice || !secondPrice || secondPrice?.length !== firstPrice?.length) return false;
        const firstPriceObject = Object.values(firstPrice);
        const secondPriceObject = Object.values(secondPrice);
        return firstPriceObject.every((e, index) => e === secondPriceObject[index]);
    };

    const isDisabled = hasEqualsPrices(priceLocal, defaultPrice) && genderLocal === filteredGender;

    const handlePriceClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorPriceEl(anchorPriceEl ? null : event.currentTarget);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (refPrice.current && !refPrice.current.contains(event.target as Node)) {
            setAnchorPriceEl(null);
            setPriceLocal(defaultPrice);
            setGenderLocal(filteredGender);
        }
    };

    const handleChange = (_: Event, newValue: number | number[]) => {
        setPriceLocal(newValue as number[]);
    };

    const handleConfirm = () => {
        setIsLoading(true);
        setTimeout(() => {
            setPrice(hasEqualsPrices(priceLocal, defaultRange) ? undefined : priceLocal);
            setGender(genderLocal);
            setIsLoading(false);
        }, 150);
        setAnchorPriceEl(null);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickMan = () => {
        setGenderLocal(genderLocal === 'man' ? undefined : 'man');
    };

    const handleClickWoman = () => {
        setGenderLocal(genderLocal === 'woman' ? undefined : 'woman');
    };

    const themeLight = hasFilter ? theme.primary : theme.darkGray;
    const themeDark = hasFilter ? theme.light : theme.darkGray;
    const color = theme.type === 'dark' ? themeDark : themeLight;

    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
            <IconButton onClick={handlePriceClick}>
                {openPrice ? (
                    <FilterAltOffIcon style={{ color: color }} />
                ) : (
                    <FilterAltOutlineIcon style={{ color: color }} />
                )}
            </IconButton>

            <Popper
                style={{ zIndex: 2 }}
                ref={refPrice}
                open={openPrice}
                placement="bottom-end"
                anchorEl={anchorPriceEl}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box
                            sx={{
                                width: 250,
                                backgroundColor: theme.light,
                                boxShadow: `1px 1px 3px 0px ${theme.shadow}`,
                                padding: '16px',
                                borderRadius: '4px',
                            }}
                        >
                            {section === 'clothes' && (
                                <Box
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '8px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Chip
                                        label="Man"
                                        variant={genderLocal === 'man' ? 'filled' : 'outlined'}
                                        style={{
                                            ...(genderLocal === 'man' && {
                                                backgroundColor: theme.primary,
                                                color: theme.light,
                                            }),
                                        }}
                                        clickable
                                        onClick={handleClickMan}
                                    />
                                    <Chip
                                        label="Woman"
                                        style={{
                                            ...(genderLocal === 'woman' && {
                                                backgroundColor: theme.primary,
                                                color: theme.light,
                                            }),
                                        }}
                                        variant={genderLocal === 'woman' ? 'filled' : 'outlined'}
                                        clickable
                                        onClick={handleClickWoman}
                                    />
                                </Box>
                            )}
                            <Typography> Price: </Typography>
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '4px',
                                }}
                            >
                                <Slider
                                    getAriaLabel={() => 'Price'}
                                    value={priceLocal}
                                    valueLabelFormat={(value) => <Typography> {value}€ </Typography>}
                                    onChange={handleChange}
                                    sx={{ color: theme.primary }}
                                    valueLabelDisplay="auto"
                                    max={findMaxNumber()}
                                    min={findMinNumber()}
                                />
                                <Box
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Typography> {findMinNumber()}€ </Typography>
                                    <Typography> {findMaxNumber()}€ </Typography>
                                </Box>
                            </Box>
                            <Box style={{ padding: '16px 0px' }}>
                                <Divider style={{ color: theme.shadow }} />
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'end' }}>
                                <Button
                                    sx={{ bgcolor: theme.primary }}
                                    onClick={handleConfirm}
                                    variant="contained"
                                    disabled={isDisabled}
                                >
                                    Confirm
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
};
