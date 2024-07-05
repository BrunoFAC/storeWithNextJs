import { create, StateCreator } from 'zustand';

export interface CartProps {
    id?: number;
    name?: string;
    age?: number;
}
export interface MarketState {
    cart: CartProps[];
}

interface MarketActions {
    setCart(cart: CartProps[]): void;
    resetStore(): void;
}

export interface MarketStore extends MarketState, MarketActions {}

const storeIdentifier = 'market-store';

const initialData: MarketState = {
    cart: [],
};

const actions = (set: any): MarketActions => {
    const setCart = (cart: CartProps[]) => {
        set(
            (state: MarketState) => {
                state.cart = cart;
            },
            false, // if this is false - it will be a synchronous update - what it means is if this state changes, it will render the associated state
            // if is true, its the opposite, will be async - will only render when the provided page is rendered;
            `${storeIdentifier}/set-cart`
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
    };
};

const storeData: StateCreator<MarketStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

export const useMarketStore = create<MarketStore>(storeData);
