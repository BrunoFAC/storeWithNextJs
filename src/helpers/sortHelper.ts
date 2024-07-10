import { FiltersValue, Products } from '../store';

export const sortHelper = (sort: FiltersValue | undefined, filtered: Products[], products: Products[]) => {
    switch (sort) {
        case FiltersValue.RELEVANCE:
            const relevance = [...products]?.sort((a, b) => b.rating.rate - a.rating.rate);
            filtered.push(...relevance);
            break;

        case FiltersValue.ASCENDENT:
            const ascendent = [...products]?.sort((a, b) => a.title.localeCompare(b.title));
            filtered.push(...ascendent);
            break;

        case FiltersValue.DESCENDENT:
            const descendent = [...products]?.sort((a, b) => b.title.localeCompare(a.title));
            filtered.push(...descendent);
            break;

        case FiltersValue.LOWEST_PRICE:
            const lowestPrice = [...products]?.sort((a, b) => a.price - b.price);
            filtered.push(...lowestPrice);
            break;

        case FiltersValue.HIGHEST_PRICE:
            const highestPrice = [...products]?.sort((a, b) => b.price - a.price);
            filtered.push(...highestPrice);
            break;
    }
};
