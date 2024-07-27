import { Status } from '@/store';

export const nifHelper = (value: string): Status => {
    if (value.length !== 9 || !/^\d+$/.test(value)) {
        return 'default';
    }

    const initialDigit = parseInt(value.charAt(0), 10);
    if (![1, 2, 3, 5, 6, 8, 9].includes(initialDigit)) {
        return 'error';
    }

    const checkDigit = parseInt(value.charAt(8), 10);
    const sum = value
        .split('')
        .slice(0, 8)
        .reduce((acc, num, index) => acc + parseInt(num, 10) * (9 - index), 0);

    const calculatedCheckDigit = 11 - (sum % 11);
    return checkDigit === (calculatedCheckDigit >= 10 ? 0 : calculatedCheckDigit) ? 'success' : 'error';
};
