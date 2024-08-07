import { create, StateCreator } from 'zustand';
import { BillingState, BillingActions, BillingStore, Status, Address, BoughtProducts } from './billing.types';
import { Products } from '@/store';
import { devtools } from '@pavlobu/zustand/middleware';
import dayjs from 'dayjs';

const storeIdentifier = 'billing-store';

const initialData: BillingState = {
    buyProducts: [],
    boughtProducts: [],
    billingAddress: {
        fullName: '',
        address: '',
        zipCode: {
            status: 'default',
            field: '',
        },
        nif: {
            status: 'default',
            field: '',
        },
    },
    selected: undefined,
    isSelectedAsProfile: false,
};

const actions = (set: any): BillingActions => {
    const setBuyProducts = (buyProducts: Products[]) => {
        set(
            (state: BillingState) => {
                state.buyProducts = buyProducts;
            },
            false,
            `${storeIdentifier}/set-buy-products`
        );
    };
    const setFullName = (fullName: string) => {
        set(
            (state: BillingState) => {
                state.billingAddress.fullName = fullName;
            },
            false,
            `${storeIdentifier}/set-full-name`
        );
    };
    const setAddress = (address: string) => {
        set(
            (state: BillingState) => {
                state.billingAddress.address = address;
            },
            false,
            `${storeIdentifier}/set-address`
        );
    };
    const setZipCodeValue = (zipCode: string) => {
        set(
            (state: BillingState) => {
                state.billingAddress.zipCode.field = zipCode;
            },
            false,
            `${storeIdentifier}/set-zip-code-value`
        );
    };
    const setZipCodeStatus = (zipCode: Status) => {
        set(
            (state: BillingState) => {
                state.billingAddress.zipCode.status = zipCode;
            },
            false,
            `${storeIdentifier}/set-zip-code-status`
        );
    };
    const setNifStatus = (nif: Status) => {
        set(
            (state: BillingState) => {
                state.billingAddress.nif.status = nif;
            },
            false,
            `${storeIdentifier}/set-nif-status`
        );
    };
    const setNifValue = (nif: string) => {
        set(
            (state: BillingState) => {
                state.billingAddress.nif.field = nif;
            },
            false,
            `${storeIdentifier}/set-nif-value`
        );
    };
    const setSelected = (selected?: 'profile' | 'new') => {
        set(
            (state: BillingState) => {
                state.selected = selected;
            },
            false,
            `${storeIdentifier}/set-selected`
        );
    };
    const resetBillingDetails = () => {
        set(
            (state: BillingState) => {
                state.billingAddress = {
                    fullName: '',
                    address: '',
                    zipCode: {
                        status: 'default',
                        field: '',
                    },
                    nif: {
                        status: 'default',
                        field: '',
                    },
                };

                state.buyProducts = [];
            },
            false,
            `${storeIdentifier}/reset-billing-store`
        );
    };
    const setBoughtProducts = (address?: Address) => {
        set(
            (state: BillingState) => {
                const boughtProducts: BoughtProducts = {
                    boughtProducts: state.buyProducts,
                    address: address ?? state.billingAddress,
                    date: dayjs().format('DD/MM/YYYY HH:mm'),
                };
                state.boughtProducts = [...state.boughtProducts, boughtProducts];
                resetBillingDetails();
            },
            false,
            `${storeIdentifier}/set-bought-products`
        );
    };
    const setIsSelectedAsProfile = (value: boolean) => {
        set(
            (state: BillingState) => {
                state.isSelectedAsProfile = value;
            },
            false,
            `${storeIdentifier}/set-is-selected-as-profile`
        );
    };
    return {
        setBuyProducts,
        setFullName,
        resetBillingDetails,
        setZipCodeStatus,
        setZipCodeValue,
        setNifStatus,
        setNifValue,
        setAddress,
        setBoughtProducts,
        setSelected,
        setIsSelectedAsProfile,
    };
};

const storeData: StateCreator<BillingStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

// @ts-ignore
export const useBillingStore = create<BillingStore>(devtools(storeData));
