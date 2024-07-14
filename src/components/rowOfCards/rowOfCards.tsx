import { Box } from '@mui/material';
import { FC } from 'react';
import { Products, useMarketStore } from '../../store';
import { Card } from '../card';

interface RowOfCardsProps {
    products: Products[];
}
export const RowOfCards: FC<RowOfCardsProps> = ({ products }) => {
    const addCart = useMarketStore((store) => store.addCart);
    const removeCart = useMarketStore((store) => store.removeCart);
    const addFavorites = useMarketStore((store) => store.addFavorites);
    const removeFavorites = useMarketStore((store) => store.removeFavorites);
    const favorites = useMarketStore((store) => store.favorites);
    const cart = useMarketStore((store) => store.cart);

    const clipArrayEveryXProducts = (division: number): Products[][] => {
        const result: Products[][] = [];
        let tempArray: Products[] = [];

        products.forEach((item, index) => {
            tempArray.push(item);
            if (tempArray.length === division || index === products.length - 1) {
                result.push(tempArray);
                tempArray = [];
            }
        });

        return result;
    };
    const handleCart = (product: Products) => {
        if (cart.some((e) => e.id === product.id)) {
            removeCart(product);
        } else {
            addCart(product);
        }
    };
    const handleFavorite = (product: Products) => {
        if (favorites.some((e) => e.id === product.id)) {
            removeFavorites(product);
        } else {
            addFavorites(product);
        }
    };

    return (
        <>
            <Box
                sx={{
                    flexDirection: 'column',
                    gap: '16px',
                    display: { lg: 'grid', md: 'none', xs: 'none' },
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    marginTop: '16px',
                }}
            >
                {clipArrayEveryXProducts(4)
                    .flat()
                    .map((e, key) => (
                        <Box key={key}>
                            <Card
                                handleFavorite={() => handleFavorite(e)}
                                handleCart={() => handleCart(e)}
                                title={e.title}
                                image={e.image}
                                id={e.id}
                                rating={e.rating}
                                price={e.price}
                            />
                        </Box>
                    ))}
                {Array.from({ length: (4 - (clipArrayEveryXProducts(4).length % 4)) % 4 }).map((_, index) => (
                    <Box
                        key={`filler-${index}`}
                        style={{
                            visibility: 'hidden',
                            border: '1px solid transparent',
                            height: '400px',
                        }}
                    />
                ))}
            </Box>

            <Box
                sx={{
                    flexDirection: 'column',
                    gap: '16px',
                    display: { lg: 'none', md: 'grid', xs: 'none' },
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    marginTop: '16px',
                }}
            >
                {clipArrayEveryXProducts(3)
                    .flat()
                    .map((e, key) => (
                        <Box key={key}>
                            <Card
                                title={e.title}
                                image={e.image}
                                id={e.id}
                                rating={e.rating}
                                price={e.price}
                                handleFavorite={() => handleFavorite(e)}
                                handleCart={() => handleCart(e)}
                            />
                        </Box>
                    ))}
                {Array.from({ length: (3 - (clipArrayEveryXProducts(3).length % 3)) % 3 }).map((_, index) => (
                    <Box
                        key={`filler-${index}`}
                        style={{
                            visibility: 'hidden',
                            border: '1px solid transparent',
                            height: '400px',
                        }}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    display: { lg: 'none', md: 'none', xs: 'flex' },
                    flexDirection: 'column',
                }}
            >
                <Box
                    style={{
                        gap: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '16px',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    {products.map((e, index) => (
                        <Card
                            handleFavorite={() => handleFavorite(e)}
                            handleCart={() => handleCart(e)}
                            key={index}
                            title={e.title}
                            image={e.image}
                            id={e.id}
                            rating={e.rating}
                            price={e.price}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
};
