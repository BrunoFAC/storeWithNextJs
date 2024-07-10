import { Gender } from '../../store';

export interface SectionsCards {
    image: string;
    label: string;
    redirect: string;
    gender?: Gender;
}
export interface Sections {
    sections: SectionsCards[];
}
