import { create, StateCreator } from 'zustand';
import {
    MarketState,
    FiltersValue,
    MarketActions,
    ThemeType,
    Products,
    Gender,
    Filters,
    MarketStore,
} from './market.types';
import { darkTheme, lightTheme, Paths, navigationItems } from '@/global';
import { devtools } from '@pavlobu/zustand/middleware';

const storeIdentifier = 'market-store';

const initialData: MarketState = {
    products: [],
    filteredProducts: [],
    filters: { sort: FiltersValue.RELEVANCE },
    section: undefined,
    isLoading: false,
    openModal: false,
    filtersSort: Object.values(FiltersValue),
    theme: darkTheme,
};

const actions = (set: any): MarketActions => {
    const setTheme = (theme: ThemeType) => {
        set(
            (state: MarketState) => {
                if (theme === 'dark') {
                    state.theme = darkTheme;
                } else {
                    state.theme = lightTheme;
                }
            },
            false,
            `${storeIdentifier}/set-theme`
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
    const setSection = (section?: Paths) => {
        set(
            (state: MarketState) => {
                const titlePath = navigationItems.find((e) => e.path === section);
                state.section = titlePath?.title;
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
        resetStore,
        setPrice,
        setSection,
        setGender,
        setSort,
        setFilters,
        setProducts,
        setFilteredProducts,
        setIsLoading,
        setOpenModal,
        setTheme,
    };
};

const storeData: StateCreator<MarketStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

// @ts-ignore
export const useMarketStore = create<MarketStore>(devtools(storeData));
