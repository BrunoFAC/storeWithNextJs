import { Products } from '@/store';

export interface BuyModalProps {
    open: boolean;
    detail?: Products;
}
export interface TransactionState {
    cart: Products[];
    favorites: Products[];
    openBuyModal?: BuyModalProps;
    detail?: Products;
    openBuyDrawer: boolean;
}

export interface TransactionActions {
    setCart(cart: Products[]): void;
    addFavorites(favorites: Products): void;
    removeFavorites(favorites: Products): void;
    setFavorites(favorites: Products[]): void;
    addCart(cart: Products): void;
    setDetail(detail?: Products): void;
    removeCart(cart: Products, isOnCart?: boolean): void;
    setCart(cart: Products[]): void;
    setOpenBuyModal(openBuyModal: BuyModalProps): void;
    setOpenBuyDrawer(openBuyDrawer: boolean): void;
    resetTransactionStore(): void;
}

export interface TransactionStore extends TransactionState, TransactionActions {}
