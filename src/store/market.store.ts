import { create, StateCreator } from 'zustand';

export interface Rating {
    rate: number;
    count: number;
}
export const pages = ['clothes', 'eletronics', 'jewelery'];

export enum FiltersValue {
    RELEVANCE = 'Relevance',
    ASCENDENT = 'Ascendent',
    DESCENDENT = 'Descendent',
    HIGHEST_PRICE = 'Highest Price',
    LOWEST_PRICE = 'Lowest Price',
}

export interface Filters {
    price?: number[];
    gender?: Gender;
    sort?: FiltersValue;
}

export type Gender = 'man' | 'woman';

export interface Products {
    id: number;
    category: string;
    image: string;
    rating: Rating;
    title: string;
    description: string;
    price: number;
}

export interface MarketState {
    cart: Products[];
    filteredProducts: Products[];
    products: Products[];
    favorites: Products[];
    filters: Filters;
    section?: string;
    isLoading: boolean;
    filtersSort: FiltersValue[];
    openModal: boolean;
}

interface MarketActions {
    setCart(cart: Products[]): void;
    setProducts(products: Products[]): void;
    setFilteredProducts(filteredProducts: Products[]): void;
    setFavorites(favorites: Products[]): void;
    setPrice(price?: number[]): void;
    setGender(gender?: Gender): void;
    setSort(sort?: FiltersValue): void;
    setFilters(filters: Filters): void;
    setSection(section?: string): void;
    setIsLoading(value: boolean): void;
    setOpenModal(openModal: boolean): void;
    resetStore(): void;
}

export interface MarketStore extends MarketState, MarketActions {}

const storeIdentifier = 'market-store';

const initialData: MarketState = {
    cart: [],
    products: [],
    filteredProducts: [],
    favorites: [],
    filters: { sort: FiltersValue.RELEVANCE },
    section: undefined,
    isLoading: false,
    openModal: false,
    filtersSort: Object.values(FiltersValue),
};

const actions = (set: any): MarketActions => {
    const setCart = (cart: Products[]) => {
        set(
            (state: MarketState) => {
                state.cart = cart;
            },
            false,
            `${storeIdentifier}/set-cart`
        );
    };

    const setFavorites = (favorites: Products[]) => {
        set(
            (state: MarketState) => {
                state.favorites = favorites;
            },
            false,
            `${storeIdentifier}/set-favorites`
        );
    };
    const setPrice = (price?: number[]) => {
        set(
            (state: MarketState) => {
                state.filters.price = price;
            },
            false,
            `${storeIdentifier}/set-price`
        );
    };

    const setGender = (gender: Gender) => {
        set(
            (state: MarketState) => {
                state.filters.gender = gender;
            },
            false,
            `${storeIdentifier}/set-gender`
        );
    };
    const setSort = (sort: FiltersValue) => {
        set(
            (state: MarketState) => {
                state.filters.sort = sort;
            },
            false,
            `${storeIdentifier}/set-sort`
        );
    };
    const setFilters = (filters: Filters) => {
        set(
            (state: MarketState) => {
                state.filters = filters;
            },
            false,
            `${storeIdentifier}/set-filters`
        );
    };
    const setSection = (section?: string) => {
        set(
            (state: MarketState) => {
                state.section = section?.replaceAll('/', '');
            },
            false,
            `${storeIdentifier}/set-section`
        );
    };
    const setFilteredProducts = (filteredProducts: Products[]) => {
        set(
            (state: MarketState) => {
                state.filteredProducts = filteredProducts;
            },
            false,
            `${storeIdentifier}/set-filtered-products`
        );
    };
    const setProducts = (products: Products[]) => {
        set(
            (state: MarketState) => {
                state.products = products;
                state.filteredProducts = products;
            },
            false,
            `${storeIdentifier}/set-products`
        );
    };

    const setOpenModal = (openModal: boolean) => {
        set(
            (state: MarketState) => {
                state.openModal = openModal;
            },
            false,
            `${storeIdentifier}/set-open-modal`
        );
    };

    const setIsLoading = (isLoading: boolean) => {
        set(
            (state: MarketState) => {
                state.isLoading = isLoading;
            },
            false,
            `${storeIdentifier}/set-is-loading`
        );
    };
    const resetStore = () => {
        set(() => {
            return { ...initialData };
        });
    };

    return {
        setCart,
        resetStore,
        setFavorites,
        setPrice,
        setSection,
        setGender,
        setSort,
        setFilters,
        setProducts,
        setFilteredProducts,
        setIsLoading,
        setOpenModal,
    };
};

const storeData: StateCreator<MarketStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

export const useMarketStore = create<MarketStore>(storeData);
