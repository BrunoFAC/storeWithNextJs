import { FieldValidator, Status } from '@/store';

export interface Profile {
    fullName: string;
    image: string;
    address: string;
    zipCode: FieldValidator;
    nif: FieldValidator;
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
    resetChanges(): void;
    resetTemporaryProfileDetails(): void;
}

export interface ProfileStore extends ProfileState, ProfileActions {}
