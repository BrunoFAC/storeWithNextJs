import { FC } from 'react';
import { DetailedCardViews } from './detailedCard.views';
import { Products, useTransactionStore } from '@/store';

export interface DetailedCardProps {
    detail?: Products;
    showBuyNow?: boolean;
}
export const DetailedCard: FC<DetailedCardProps> = ({ detail, showBuyNow }) => {
    const cart = useTransactionStore((store) => store.cart);
    const addCart = useTransactionStore((store) => store.addCart);
    const removeCart = useTransactionStore((store) => store.removeCart);

    const handleCart = (product: Products) => {
        if (cart.some((e) => e.id === product.id)) {
            removeCart(product);
        } else {
            addCart(product);
        }
    };

    return (
        <>
            {detail !== undefined && (
                <DetailedCardViews.CardLG showBuyNow={showBuyNow} handleCart={handleCart} detail={detail} />
            )}
            {detail !== undefined && (
                <DetailedCardViews.CardMD showBuyNow={showBuyNow} handleCart={handleCart} detail={detail} />
            )}
            {detail !== undefined && (
                <DetailedCardViews.CardXS showBuyNow={showBuyNow} handleCart={handleCart} detail={detail} />
            )}
        </>
    );
};
