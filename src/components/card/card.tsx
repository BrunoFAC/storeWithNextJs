import { Box, Grow } from '@mui/material';
import { FC } from 'react';
import { CardViews } from './card.views';
import { Products, useMarketStore, useTransactionStore } from '@/store';
import { useRouter } from 'next/router';
import { Paths } from '@/global';
export interface CardProps {
    product: Products;
    isClickable?: boolean;
}
export const Card: FC<CardProps> = ({ product, isClickable }) => {
    const router = useRouter();
    const theme = useMarketStore((store) => store.theme);
    const setDetail = useTransactionStore((store) => store.setDetail);

    const handleDetail = () => {
        setDetail(product);
        router.push(Paths.Detail);
    };

    return (
        <Grow in={true}>
            <Box
                sx={{
                    height: '400px',
                    borderRadius: '4px',
                    transition: '0.5s ease-in-out',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    border: `1px solid ${theme.gray}`,
                    backgroundSize: '200px',
                    backgroundColor: theme.light,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url('${product.image}')`,
                }}
                onClick={() => isClickable && handleDetail()}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `1px 3px 15px ${theme.primary}`;
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.border = 'none';
                    const content = e.currentTarget.querySelector('.content') as HTMLElement;
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(-10%)';
                    content.style.visibility = 'visible';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.border = `1px solid ${theme.gray}`;
                    const content = e.currentTarget.querySelector('.content') as HTMLElement;
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(100%)';
                    content.style.visibility = 'hidden';
                }}
            >
                <CardViews.TopStructure product={product} />
                <Box
                    className="content"
                    sx={{
                        fontSize: '1.5rem',
                        color: theme.light,
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0,
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'flex-end',
                        background: `linear-gradient(0deg,${theme.fadedPrimary} 0%, rgba(255, 255, 255, 0) 100%)`,
                        transform: 'translateY(100%)',
                        transition: 'opacity 0.5s ease-in-out, transform 0.5s 0.2s',
                        visibility: 'hidden',
                        textAlign: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <CardViews.BottomStructure product={product} />
                </Box>
            </Box>
        </Grow>
    );
};
