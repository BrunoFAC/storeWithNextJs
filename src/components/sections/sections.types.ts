import { Paths } from '../../global';
import { Gender } from '@/store';

export interface SectionsCards {
    image: string;
    label: string;
    redirect: Paths;
    gender?: Gender;
}
export interface Sections {
    sections: SectionsCards[];
}
