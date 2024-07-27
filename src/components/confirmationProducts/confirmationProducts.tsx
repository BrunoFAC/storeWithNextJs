import { Products } from '@/store';
import { FC } from 'react';
import { ConfirmationProductsViews } from './confirmationProducts.views';
export interface ConfirmationProductsProps {
    e: Products;
    priceProduct: (id?: number) => number[];
    quantityOfProducts: (id: number) => number;
}
export const ConfirmationProducts: FC<ConfirmationProductsProps> = ({ e, priceProduct, quantityOfProducts }) => {
    return (
        <>
            <ConfirmationProductsViews.ConfirmationProductsLG
                e={e}
                priceProduct={priceProduct}
                quantityOfProducts={quantityOfProducts}
            />
            <ConfirmationProductsViews.ConfirmationProductsMD
                e={e}
                priceProduct={priceProduct}
                quantityOfProducts={quantityOfProducts}
            />
            <ConfirmationProductsViews.ConfirmationProductsXS
                e={e}
                priceProduct={priceProduct}
                quantityOfProducts={quantityOfProducts}
            />
        </>
    );
};
