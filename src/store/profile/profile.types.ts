import { Address, Status } from '@/store';

export interface ProfileState {
    profileAddress: Address;
}
export interface ProfileActions {
    setFullName(fullName?: string): void;
    setAddress(address: string): void;
    setZipCodeStatus(status: Status): void;
    setZipCodeValue(zipCode: string): void;
    setNifStatus(status: Status): void;
    setNifValue(nif: string): void;
    resetProfileDetails(): void;
}

export interface ProfileStore extends ProfileState, ProfileActions {}
