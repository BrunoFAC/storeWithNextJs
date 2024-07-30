import { create, StateCreator } from 'zustand';
import { ProfileState, ProfileActions, ProfileStore, Status } from '@/store';

const storeIdentifier = 'profile-store';

const initialData: ProfileState = {
    profileAddress: {
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

const actions = (set: any): ProfileActions => {
    const setFullName = (fullName: string) => {
        set(
            (state: ProfileState) => {
                state.profileAddress.fullName = fullName;
            },
            false,
            `${storeIdentifier}/set-full-name`
        );
    };
    const setAddress = (address: string) => {
        set(
            (state: ProfileState) => {
                state.profileAddress.address = address;
            },
            false,
            `${storeIdentifier}/set-address`
        );
    };
    const setZipCodeValue = (zipCode: string) => {
        set(
            (state: ProfileState) => {
                state.profileAddress.zipCode.field = zipCode;
            },
            false,
            `${storeIdentifier}/set-zip-code-value`
        );
    };
    const setZipCodeStatus = (zipCode: Status) => {
        set(
            (state: ProfileState) => {
                state.profileAddress.zipCode.status = zipCode;
            },
            false,
            `${storeIdentifier}/set-zip-code-status`
        );
    };
    const setNifStatus = (nif: Status) => {
        set(
            (state: ProfileState) => {
                state.profileAddress.nif.status = nif;
            },
            false,
            `${storeIdentifier}/set-nif-status`
        );
    };
    const setNifValue = (nif: string) => {
        set(
            (state: ProfileState) => {
                state.profileAddress.nif.field = nif;
            },
            false,
            `${storeIdentifier}/set-nif-value`
        );
    };
    const resetProfileDetails = () => {
        set(
            (state: ProfileState) => {
                state.profileAddress = {
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
            },
            false,
            `${storeIdentifier}/reset-profile-store`
        );
    };

    return {
        setFullName,
        resetProfileDetails,
        setZipCodeStatus,
        setZipCodeValue,
        setNifStatus,
        setNifValue,
        setAddress,
    };
};

const storeData: StateCreator<ProfileStore> = (set) => ({
    ...initialData,
    ...actions(set),
});

export const useProfileStore = create<ProfileStore>(storeData);
