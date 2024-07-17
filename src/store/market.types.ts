export interface Rating {
    rate: number;
    count: number;
}
export const pages = ['clothes', 'eletronics', 'jewelery'];
export type ThemeType = 'dark' | 'light';

export interface Theme {
    type: ThemeType;
    light: string;
    primary: string;
    secondary: string;
    primaryLight: string;
    darkGray: string;
    shadow: string;
    transparent: string;
    lightGray: string;
    gray: string;
    fadedPrimary: string;
}

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
    switchMode: ThemeType;
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
    detail?: Products;
    theme: Theme;
}

export interface MarketActions {
    setCart(cart: Products[]): void;
    setProducts(products: Products[]): void;
    setFilteredProducts(filteredProducts: Products[]): void;
    addFavorites(favorites: Products): void;
    removeFavorites(favorites: Products): void;
    setFavorites(favorites: Products[]): void;
    addCart(cart: Products): void;
    setDetail(detail?: Products): void;
    removeCart(cart: Products): void;
    setCart(cart: Products[]): void;
    setPrice(price?: number[]): void;
    setGender(gender?: Gender): void;
    setSort(sort?: FiltersValue): void;
    setFilters(filters: Filters): void;
    setSection(section?: string): void;
    setIsLoading(value: boolean): void;
    setOpenModal(openModal: boolean): void;
    setTheme(theme: ThemeType): void;
    resetStore(): void;
}

export interface MarketStore extends MarketState, MarketActions {}
