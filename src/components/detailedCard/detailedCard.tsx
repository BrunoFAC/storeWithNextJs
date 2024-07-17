import { FC, useEffect } from 'react';
import { Products, useMarketStore } from '../../store';
import { useRouter } from 'next/router';
import { DetailedCardViews } from './detailedCard.views';

export const DetailedCard: FC = () => {
    const router = useRouter();

    const detail = useMarketStore((store) => store.detail);

    useEffect(() => {
        if (detail === undefined) {
            router.push('/');
        }
        return () => setDetail(undefined);
    }, [detail]);

    const cart = useMarketStore((store) => store.cart);
    const addCart = useMarketStore((store) => store.addCart);
    const removeCart = useMarketStore((store) => store.removeCart);
    const setDetail = useMarketStore((store) => store.setDetail);

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
