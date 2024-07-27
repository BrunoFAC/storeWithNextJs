import { Status } from '@/store';

export const zipCodeHelper = (zipCode: string): Status => {
    const zipCodePattern = /^\d{4}-\d{3}$/;

    if (zipCode.length < 8) return 'default';
    if (zipCode.length > 7 && (zipCode.split('-')[0] === '0000' || zipCode.split('-')[1] === '000')) return 'error';
    return zipCodePattern.test(zipCode) ? 'success' : 'error';
};
