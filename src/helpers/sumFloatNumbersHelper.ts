export const sumFloatNumbersHelper = (values: number[]) => {
    if (values === undefined) {
        return 0;
    }

    const sum: number = values.reduce((accumulator: number, obj) => {
        return Number(accumulator) + (!isNaN(Number(obj)) ? Number(obj) : 0);
    }, 0);

    return parseFloat(sum.toFixed(2));
};
