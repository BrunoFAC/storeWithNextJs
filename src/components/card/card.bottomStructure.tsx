import { Box, Button, Tooltip, Typography, Zoom } from '@mui/material';
import { FC } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Rating, useMarketStore } from '../../store';
interface BottomStructureProps {
    title: string;
    rating: Rating;
}
export const BottomStructure: FC<BottomStructureProps> = ({ rating, title }) => {
    const notRated = Math.round(5 - rating.rate);
    const rated = Math.round(rating.rate);

    const setOpenModal = useMarketStore((store) => store.setOpenModal);

    const handleClickOpen = () => {
        setOpenModal(true);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100%',
                alignItems: 'end',
                justifyContent: 'start',
                paddingBottom: '10px',
                width: '100%',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    width: '100%',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <Typography
                        style={{
                            padding: '12px 16px 0px',
                            textAlign: 'start',
                            width: '100%',
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        width: '100%',
                    }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '0px 12px',
                            cursor: 'default',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Tooltip TransitionComponent={Zoom} arrow placement="right" title="Reviews">
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                {Array.from({ length: rated }, (_, index) => (
                                    <StarIcon key={index} style={{ color: '#1776D2' }} />
                                ))}
                                {!(notRated === 0)
                                    ? Array.from({ length: notRated }, (_, index) => (
                                          <StarBorderIcon key={index} style={{ color: '#1776D2' }} />
                                      ))
                                    : undefined}
                                <Typography
                                    style={{ color: 'white', paddingLeft: '4px' }}
                                >{`(${rating.count})`}</Typography>
                            </Box>
                        </Tooltip>
                    </Box>
                    <Box style={{ padding: '4px 12px' }}>
                        <Button
                            onClick={() => handleClickOpen()}
                            style={{ color: 'white', width: '100%', borderColor: 'white' }}
                            variant="outlined"
                        >
                            see details
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
