import { Box, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FC } from 'react';
import { useMarketStore } from '../../store';
interface TopStructureProps {
    price: number;
}
export const TopStructure: FC<TopStructureProps> = ({ price }) => {
    const setOpenModal = useMarketStore((store) => store.setOpenModal);

    const handleClickOpen = () => {
        setOpenModal(true);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px 0px',
                position: 'relative',
                zIndex: 1,
                flexDirection: 'row',
            }}
        >
            <Typography style={{ color: '#1876D2' }}>{price + '€'}</Typography>
            <Box style={{ flexDirection: 'row' }}>
                <IconButton onClick={() => handleClickOpen()} size="small" color="primary">
                    <ShoppingCartOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => handleClickOpen()} size="small" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
            </Box>
        </Box>
    );
};
