import { Products } from '@/store';

export const priceHelper = (
    price: number[] | undefined,
    filteredPrice: Products[],
    filteredSort: Products[],
    products: Products[]
) => {
    if (price) {
        const [min, max] = price;
        if (filteredSort.length > 0) {
            filteredPrice.push(...filteredSort.filter((product) => product.price >= min && product.price <= max));
        } else {
            filteredPrice.push(...products.filter((product) => product.price >= min && product.price <= max));
        }
    } else {
        if (filteredSort.length > 0) {
            const min = Math.min(...filteredSort.map((e) => e.price));
            const max = Math.max(...filteredSort.map((e) => e.price));
            filteredPrice.push(...filteredSort.filter((product) => product.price >= min && product.price <= max));
        } else {
            const min = Math.min(...products.map((e) => e.price));
            const max = Math.max(...products.map((e) => e.price));
            filteredPrice.push(...products.filter((product) => product.price >= min && product.price <= max));
        }
    }
};
