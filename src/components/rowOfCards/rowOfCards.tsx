import { Products } from '@/store';
import { Box } from '@mui/material';
import { FC } from 'react';
import { Card } from '@/components';
interface RowOfCardsProps {
    products: Products[];
}
export const RowOfCards: FC<RowOfCardsProps> = ({ products }) => {
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
                            <Card product={e} isClickable />
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
                            <Card product={e} isClickable />
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
                        <Card key={index} product={e} />
                    ))}
                </Box>
            </Box>
        </>
    );
};
