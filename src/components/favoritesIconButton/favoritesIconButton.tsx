import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { resources } from '@/global';
import { Products, useMarketStore } from '@/store';
import { IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FC } from 'react';
export interface FavoritesButtonProps {
    favorite: Products;
    isLightIcon?: boolean;
}

export const FavoritesIconButton: FC<FavoritesButtonProps> = ({ favorite, isLightIcon }) => {
    const { enqueueSnackbar } = useSnackbar();

    const favorites = useMarketStore((store) => store.favorites);
    const isOnFavorites = favorites.some((e) => e.id === favorite.id);
    const addFavorites = useMarketStore((store) => store.addFavorites);
    const removeFavorites = useMarketStore((store) => store.removeFavorites);

    const handleFavorite = () => {
        if (favorites.some((e) => e.id === favorite.id)) {
            removeFavorites(favorite);
        } else {
            addFavorites(favorite);
        }
    };
    const theme = useMarketStore((store) => store.theme);

    const handleClickFavorites = () => {
        enqueueSnackbar(isOnFavorites ? resources.hasBeenRemovedFromFavorites : resources.hasBeenAddedToFavorites, {
            variant: 'success',
        });
        handleFavorite();
    };
    return (
        <IconButton sx={{ color: theme.primary }} onClick={handleClickFavorites} size="small" color="primary">
            {isOnFavorites ? (
                <FavoriteIcon sx={{ color: isLightIcon ? theme.light : theme.primary }} />
            ) : (
                <FavoriteBorderIcon sx={{ color: isLightIcon ? theme.light : theme.primary }} />
            )}
        </IconButton>
    );
};
