import { Products } from '../store';

export const removeDuplicates = (items: Products[]): Products[] => {
    const uniqueItems = items.reduce((product, current) => {
        const found = product.find((item) => item.id === current.id);
        if (!found) {
            return product.concat([current]);
        } else {
            return product;
        }
    }, [] as Products[]);
    return uniqueItems;
};
