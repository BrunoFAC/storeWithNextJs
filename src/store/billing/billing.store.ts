import { create, StateCreator } from 'zustand';
import { BillingState, BillingActions, BillingStore, Status } from './billing.types';
import { Products } from '../market';

const storeIdentifier = 'billing-store';

const initialData: BillingState = {
    buyProducts: [],
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
    const resetBillingStore = () => {
        set(
            () => {
                //edit here

                return { ...initialData };
            },
            false,
            `${storeIdentifier}/reset-billing-store`
        );
    };
    return {
        setBuyProducts,
        setFullName,
        resetBillingStore,
        setZipCodeStatus,
        setZipCodeValue,
        setNifStatus,
        setNifValue,
        setAddress,
    };
};

const storeData: StateCreator<BillingStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

export const useBillingStore = create<BillingStore>(storeData);
