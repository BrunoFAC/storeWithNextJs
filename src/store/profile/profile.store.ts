import { create, StateCreator } from 'zustand';
import { ProfileState, ProfileActions, ProfileStore, Status, Profile, ReOrderModalProps } from '@/store';
import { devtools } from '@pavlobu/zustand/middleware';

const storeIdentifier = 'profile-store';

const initialData: ProfileState = {
    image: '',
    fullName: '',
    address: '',
    zipCodeStatus: 'default',
    zipCodeField: '',
    nifStatus: 'default',
    nifField: '',
    profile: undefined,
    openReOrderModal: {
        open: false,
        order: undefined,
    },
};

const actions = (set: any): ProfileActions => {
    const setFullName = (fullName: string) => {
        set(
            (state: ProfileState) => {
                state.fullName = fullName;
            },
            false,
            `${storeIdentifier}/set-full-name`
        );
    };
    const setImage = (image: string) => {
        set(
            (state: ProfileState) => {
                state.image = image;
            },
            false,
            `${storeIdentifier}/set-image`
        );
    };
    const setAddress = (address: string) => {
        set(
            (state: ProfileState) => {
                state.address = address;
            },
            false,
            `${storeIdentifier}/set-address`
        );
    };
    const setZipCodeValue = (zipCode: string) => {
        set(
            (state: ProfileState) => {
                state.zipCodeField = zipCode;
            },
            false,
            `${storeIdentifier}/set-zip-code-value`
        );
    };
    const setZipCodeStatus = (zipCode: Status) => {
        set(
            (state: ProfileState) => {
                state.zipCodeStatus = zipCode;
            },
            false,
            `${storeIdentifier}/set-zip-code-status`
        );
    };
    const setNifStatus = (nif: Status) => {
        set(
            (state: ProfileState) => {
                state.nifStatus = nif;
            },
            false,
            `${storeIdentifier}/set-nif-status`
        );
    };
    const setNifValue = (nif: string) => {
        set(
            (state: ProfileState) => {
                state.nifField = nif;
            },
            false,
            `${storeIdentifier}/set-nif-value`
        );
    };
    const resetTemporaryProfileDetails = () => {
        set(
            (state: ProfileState) => {
                if (state.profile !== undefined) {
                    state.image = state.profile?.image;
                    state.fullName = state.profile?.fullName;
                    state.address = state.profile?.address;
                    state.zipCodeStatus = state.profile?.zipCode.status;
                    state.zipCodeField = state.profile?.zipCode.field;
                    state.nifField = state.profile?.nif.field;
                    state.nifStatus = state.profile?.nif.status;
                } else {
                    state.image = '';
                    state.fullName = '';
                    state.address = '';
                    state.nifField = '';
                    state.zipCodeField = '';
                    state.nifStatus = 'default';
                    state.zipCodeStatus = 'default';
                }
            },
            false,
            `${storeIdentifier}/reset-temporary-profile-details`
        );
    };
    const resetChanges = () => {
        set(
            (state: ProfileState) => {
                state.image = '';
                state.fullName = '';
                state.address = '';
                state.nifField = '';
                state.zipCodeField = '';
                state.nifStatus = 'default';
                state.zipCodeStatus = 'default';
                state.profile = undefined;
            },
            false,
            `${storeIdentifier}/reset-changes`
        );
    };
    const saveProfile = (profile?: Profile) => {
        set(
            (state: ProfileState) => {
                state.profile = profile ?? {
                    address: state.address,
                    fullName: state.fullName,
                    image: state.image,
                    nif: { field: state.nifField, status: state.nifStatus },
                    zipCode: { field: state.zipCodeField, status: state.zipCodeStatus },
                };
            },
            false,
            `${storeIdentifier}/save-profile`
        );
    };
    const setOpenReOrderModal = (openReOrderModal: ReOrderModalProps) => {
        set(
            (state: ProfileState) => {
                state.openReOrderModal = openReOrderModal;
            },
            false,
            `${storeIdentifier}/set-open-re-order-modal`
        );
    };
    return {
        setFullName,
        saveProfile,
        resetChanges,
        resetTemporaryProfileDetails,
        setZipCodeStatus,
        setZipCodeValue,
        setNifStatus,
        setNifValue,
        setAddress,
        setImage,
        setOpenReOrderModal,
    };
};

const storeData: StateCreator<ProfileStore> = (set) => ({
    ...initialData,
    ...actions(set),
});
// @ts-ignore
export const useProfileStore = create<ProfileStore>(devtools(storeData));
