import { Products } from '@/store';
import { FC } from 'react';
import { ConfirmationProductsViews } from './confirmationProducts.views';
export interface ConfirmationProductsProps {
    e: Products;
    hasHigherFontSize?: boolean;
    priceProduct: (id?: number) => number[];
    quantityOfProducts: (id: number) => number;
}
export const ConfirmationProducts: FC<ConfirmationProductsProps> = ({
    hasHigherFontSize = false,
    e,
    priceProduct,
    quantityOfProducts,
}) => {
    return (
        <>
            <ConfirmationProductsViews.ConfirmationProductsLG
                e={e}
                priceProduct={priceProduct}
                quantityOfProducts={quantityOfProducts}
            />
            <ConfirmationProductsViews.ConfirmationProductsMD
                e={e}
                hasHigherFontSize={hasHigherFontSize}
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
