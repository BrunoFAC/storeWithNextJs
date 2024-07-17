import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Products, useMarketStore } from '../../../store';
import { useRouter } from 'next/router';
import { RatingStars } from '../../ratingStars';
import { resources } from '../../../global/resources';

interface BottomStructureProps {
    product: Products;
}

export const BottomStructure: FC<BottomStructureProps> = ({ product }) => {
    const router = useRouter();
    const theme = useMarketStore((store) => store.theme);
    const setDetail = useMarketStore((store) => store.setDetail);

    const handleDetail = () => {
        setDetail(product);
        router.push('/detail');
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
                        {product.title}
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
                        <RatingStars rating={product.rating} />
                    </Box>
                    <Box style={{ padding: '4px 12px' }}>
                        <Button
                            onClick={handleDetail}
                            style={{ color: theme.light, width: '100%', borderColor: theme.light }}
                            variant="outlined"
                        >
                            {resources.seeDetails}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};