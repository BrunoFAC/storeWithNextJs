import { FC } from 'react';
import { SummaryViews } from './summary.views';
export interface SummaryProps {
    priceProduct: (id?: number) => number[];
}
export const Summary: FC<SummaryProps> = ({ priceProduct }) => {
    return (
        <>
            <SummaryViews.SummaryMD priceProduct={priceProduct} />
            <SummaryViews.SummaryXS priceProduct={priceProduct} />
        </>
    );
};
