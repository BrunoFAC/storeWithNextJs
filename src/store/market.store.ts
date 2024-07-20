import { create, StateCreator } from 'zustand';
import { darkTheme, lightTheme } from '../global/theme';
import {
    MarketState,
    FiltersValue,
    MarketActions,
    ThemeType,
    Products,
    Gender,
    Filters,
    MarketStore,
    BuyModalProps,
} from './market.types';

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
    openBuyModal: undefined,
    filtersSort: Object.values(FiltersValue),
    theme: darkTheme,
    detail: undefined,
    openBuyDrawer: false,
    showButtonBuyNow: false,
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
    const setCart = (cart: Products[]) => {
        set(
            (state: MarketState) => {
                if (cart.length > 0) {
                    state.cart = [...cart].sort((a, b) => a.id - b.id);
                } else {
                    state.cart = cart;
                    if (state.openBuyDrawer) {
                        state.openBuyDrawer = false;
                    }
                }
            },
            false,
            `${storeIdentifier}/set-cart`
        );
    };
    const addCart = (cart: Products) => {
        set(
            (state: MarketState) => {
                const addedCart = [...state.cart, cart].sort((a, b) => a.id - b.id);
                state.cart = addedCart;
            },
            false,
            `${storeIdentifier}/set-cart`
        );
    };
    const removeCart = (cart: Products, isOnCart?: boolean) => {
        set(
            (state: MarketState) => {
                if (isOnCart) {
                    const removeIndex = state.cart.findIndex((product) => product.id === cart.id);
                    state.cart = state.cart.filter((_, index) => index !== removeIndex);
                } else {
                    const removedCart = state.cart.filter((e) => e.id !== cart.id);
                    state.cart = removedCart;
                }
                if (state.cart.length === 0 && state.openBuyDrawer) {
                    state.openBuyDrawer = false;
                }
            },
            false,
            `${storeIdentifier}/set-remove-cart`
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
    const addFavorites = (favorites: Products) => {
        set(
            (state: MarketState) => {
                state.favorites = [...state.favorites, favorites];
            },
            false,
            `${storeIdentifier}/add-favorites`
        );
    };
    const removeFavorites = (favorites: Products) => {
        set(
            (state: MarketState) => {
                state.favorites = state.favorites.filter((e) => e.id !== favorites.id);
            },
            false,
            `${storeIdentifier}/remove-favorites`
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
    const setOpenBuyModal = (openBuyModal: BuyModalProps) => {
        set(
            (state: MarketState) => {
                state.openBuyModal = openBuyModal;
            },
            false,
            `${storeIdentifier}/set-open-buy-modal`
        );
    };
    const setOpenBuyDrawer = (openBuyDrawer: boolean) => {
        set(
            (state: MarketState) => {
                state.openBuyDrawer = openBuyDrawer;
            },
            false,
            `${storeIdentifier}/set-open-buy-drawer`
        );
    };
    const setShowButtonBuyNow = (showButtonBuyNow: boolean) => {
        set(
            (state: MarketState) => {
                state.showButtonBuyNow = showButtonBuyNow;
            },
            false,
            `${storeIdentifier}/set-show-button-buy-now`
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
    const setDetail = (detail?: Products) => {
        set(
            (state: MarketState) => {
                state.detail = detail;
            },
            false,
            `${storeIdentifier}/add-favorites`
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
        setTheme,
        addCart,
        removeFavorites,
        addFavorites,
        removeCart,
        setDetail,
        setOpenBuyDrawer,
        setOpenBuyModal,
        setShowButtonBuyNow,
    };
};

const storeData: StateCreator<MarketStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

export const useMarketStore = create<MarketStore>(storeData);
