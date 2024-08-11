import { Paths } from '@/global';

export interface Rating {
    rate: number;
    count: number;
}
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
    red: string;
    green: string;
    fadedBackground: string;
    divider: string;
    border: string;
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
    filteredProducts: Products[];
    products: Products[];
    filters: Filters;
    section?: string;
    isLoading: boolean | null;
    filtersSort: FiltersValue[];
    openModal: boolean;
    theme: Theme;
}

export interface MarketActions {
    setProducts(products: Products[]): void;
    setFilteredProducts(filteredProducts: Products[]): void;
    setPrice(price?: number[]): void;
    setGender(gender?: Gender): void;
    setSort(sort?: FiltersValue): void;
    setFilters(filters: Filters): void;
    setSection(section?: Paths): void;
    setIsLoading(value: boolean): void;
    setOpenModal(openModal: boolean): void;
    setTheme(theme: ThemeType): void;
    resetStore(): void;
}

export interface MarketStore extends MarketState, MarketActions {}
