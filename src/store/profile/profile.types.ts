import { Address, Products, Status } from '@/store';

export interface Profile extends Address {
    image: string;
}
export interface ReOrderProps {
    details: Products[];
    address: Address;
    date: string;
}
export interface ReOrderModalProps {
    open: boolean;
    order?: ReOrderProps;
}
export interface ProfileState {
    fullName: string;
    image: string;
    address: string;
    nifField: string;
    nifStatus: Status;
    zipCodeField: string;
    zipCodeStatus: Status;
    profile?: Profile;
    openReOrderModal: ReOrderModalProps;
}
export interface ProfileActions {
    setFullName(fullName?: string): void;
    setAddress(address: string): void;
    setImage(image: string): void;
    setZipCodeStatus(status: Status): void;
    setZipCodeValue(zipCode: string): void;
    setNifStatus(status: Status): void;
    saveProfile(profile?: Profile): void;
    setNifValue(nif: string): void;
    setOpenReOrderModal(openReOrderModal: ReOrderModalProps): void;
    resetChanges(): void;
    resetTemporaryProfileDetails(): void;
}

export interface ProfileStore extends ProfileState, ProfileActions {}
