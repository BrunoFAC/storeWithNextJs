import { Products } from '../market';

export type Status = 'success' | 'error' | 'default';
export interface FieldValidator {
    status: Status;
    field: string;
}
export interface Address {
    fullName: string;
    address: string;
    zipCode: FieldValidator;
    nif: FieldValidator;
}
export interface BoughtProducts {
    address: Address;
    boughtProducts: Products[];
}
export interface BillingState {
    billingAddress: Address;
    buyProducts: Products[];
    boughtProducts: BoughtProducts[];
}
export interface BillingActions {
    setBuyProducts(buyProducts: Products[]): void;
    setBoughtProducts(): void;
    setFullName(fullName?: string): void;
    setAddress(address: string): void;
    setZipCodeStatus(status: Status): void;
    setZipCodeValue(zipCode: string): void;
    setNifStatus(status: Status): void;
    setNifValue(nif: string): void;
    resetBillingDetails(): void;
}

export interface BillingStore extends BillingState, BillingActions {}
