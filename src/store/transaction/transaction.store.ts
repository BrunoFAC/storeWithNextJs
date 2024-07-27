import { create, StateCreator } from 'zustand';

import { BuyModalProps, TransactionActions, TransactionState, TransactionStore } from './transaction.types';
import { Products } from '../market';

const storeIdentifier = 'transaction-store';

const initialData: TransactionState = {
    cart: [],
    favorites: [],
    openBuyModal: undefined,
    detail: undefined,
    openBuyDrawer: false,
    showButtonBuyNow: false,
};

const actions = (set: any): TransactionActions => {
    const setCart = (cart: Products[]) => {
        set(
            (state: TransactionState) => {
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
            (state: TransactionState) => {
                state.cart = [...state.cart, cart].sort((a, b) => a.id - b.id);
            },
            false,
            `${storeIdentifier}/set-cart`
        );
    };
    const removeCart = (cart: Products, isOnCart?: boolean) => {
        set(
            (state: TransactionState) => {
                if (isOnCart) {
                    const removeIndex = state.cart.findIndex((product) => product.id === cart.id);
                    state.cart = state.cart.filter((_, index) => index !== removeIndex);
                } else {
                    state.cart = state.cart.filter((e) => e.id !== cart.id);
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
            (state: TransactionState) => {
                state.favorites = favorites;
            },
            false,
            `${storeIdentifier}/set-favorites`
        );
    };
    const addFavorites = (favorites: Products) => {
        set(
            (state: TransactionState) => {
                state.favorites = [...state.favorites, favorites];
            },
            false,
            `${storeIdentifier}/add-favorites`
        );
    };
    const removeFavorites = (favorites: Products) => {
        set(
            (state: TransactionState) => {
                state.favorites = state.favorites.filter((e) => e.id !== favorites.id);
            },
            false,
            `${storeIdentifier}/remove-favorites`
        );
    };
    const setOpenBuyModal = (openBuyModal: BuyModalProps) => {
        set(
            (state: TransactionState) => {
                state.openBuyModal = openBuyModal;
            },
            false,
            `${storeIdentifier}/set-open-buy-modal`
        );
    };
    const setOpenBuyDrawer = (openBuyDrawer: boolean) => {
        set(
            (state: TransactionState) => {
                state.openBuyDrawer = openBuyDrawer;
            },
            false,
            `${storeIdentifier}/set-open-buy-drawer`
        );
    };
    const setShowButtonBuyNow = (showButtonBuyNow: boolean) => {
        set(
            (state: TransactionState) => {
                state.showButtonBuyNow = showButtonBuyNow;
            },
            false,
            `${storeIdentifier}/set-show-button-buy-now`
        );
    };
    const setDetail = (detail?: Products) => {
        set(
            (state: TransactionState) => {
                state.detail = detail;
            },
            false,
            `${storeIdentifier}/add-favorites`
        );
    };
    const resetTransactionStore = () => {
        set(() => {
            return { ...initialData };
        });
    };

    return {
        setCart,
        resetTransactionStore,
        setFavorites,
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

const storeData: StateCreator<TransactionStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

export const useTransactionStore = create<TransactionStore>(storeData);
