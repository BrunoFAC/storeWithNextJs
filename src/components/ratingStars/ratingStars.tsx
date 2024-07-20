import { FC } from 'react';
import { Rating, useMarketStore } from '../../store';
import { Tooltip, Zoom, Box, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { resources } from '../../global';

interface RatingStarsProps {
    rating: Rating;
    color?: string;
}
export const RatingStars: FC<RatingStarsProps> = ({ color, rating }) => {
    const notRated = Math.round(5 - rating.rate);
    const rated = Math.round(rating.rate);
    const theme = useMarketStore((store) => store.theme);

    return (
        <Tooltip TransitionComponent={Zoom} arrow placement="right" title={resources.reviews}>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                {Array.from({ length: rated }, (_, index) => (
                    <StarIcon key={index} style={{ color: color ?? theme.primary }} />
                ))}
                {notRated !== 0
                    ? Array.from({ length: notRated }, (_, index) => (
                          <StarBorderIcon key={index} style={{ color: color ?? theme.primary }} />
                      ))
                    : undefined}
                <Typography style={{ color: theme.light, paddingLeft: '4px' }}>{`(${rating.count})`}</Typography>
            </Box>
        </Tooltip>
    );
};
