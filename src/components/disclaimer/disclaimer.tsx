import { FC, useEffect, useState } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Box, IconButton, Tooltip, Zoom } from '@mui/material';
import { useMarketStore } from '@/store';
export interface DisclaimerProps {
    title: string;
}
export const Disclaimer: FC<DisclaimerProps> = ({ title }) => {
    const theme = useMarketStore((store) => store.theme);
    const [open, setOpen] = useState<boolean>(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleTooltipClose);
        document.addEventListener('scroll', handleTooltipClose);

        return () => {
            document.removeEventListener('mousedown', handleTooltipClose);
            document.removeEventListener('scroll', handleTooltipClose);
        };
    }, []);

    return (
        <>
            <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
                <Tooltip
                    arrow
                    placement="top"
                    style={{ backgroundColor: theme.lightGray }}
                    TransitionComponent={Zoom}
                    title={title}
                >
                    <IconButton
                        onClick={handleTooltipOpen}
                        size="small"
                        style={{ backgroundColor: theme.lightGray, width: 16, height: 16 }}
                    >
                        <QuestionMarkIcon style={{ color: theme.light, width: 10, height: 10 }} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ display: { md: 'none', lg: 'none', xs: 'flex' } }}>
                <Tooltip
                    style={{ backgroundColor: theme.lightGray }}
                    TransitionComponent={Zoom}
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    placement="top"
                    title={title}
                    arrow
                >
                    <IconButton
                        onClick={handleTooltipOpen}
                        size="small"
                        style={{ backgroundColor: theme.lightGray, width: 16, height: 16 }}
                    >
                        <QuestionMarkIcon style={{ color: theme.light, width: 10, height: 10 }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    );
};
