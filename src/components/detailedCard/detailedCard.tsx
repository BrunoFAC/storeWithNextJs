import { FC } from 'react';
import { Products, useMarketStore } from '../../store';
import { DetailedCardViews } from './detailedCard.views';

export interface DetailedCardProps {
    detail?: Products;
}
export const DetailedCard: FC<DetailedCardProps> = ({ detail }) => {
    const cart = useMarketStore((store) => store.cart);
    const addCart = useMarketStore((store) => store.addCart);
    const removeCart = useMarketStore((store) => store.removeCart);

    const handleCart = (product: Products) => {
        if (cart.some((e) => e.id === product.id)) {
            removeCart(product);
        } else {
            addCart(product);
        }
    };

    return (
        <>
            {detail !== undefined && <DetailedCardViews.CardLG handleCart={handleCart} detail={detail} />}
            {detail !== undefined && <DetailedCardViews.CardMD handleCart={handleCart} detail={detail} />}
            {detail !== undefined && <DetailedCardViews.CardXS handleCart={handleCart} detail={detail} />}
        </>
    );
};
