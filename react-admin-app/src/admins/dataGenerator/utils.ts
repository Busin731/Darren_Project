import faker from 'faker/locale/en';

export const weightedArrayElement = (values: any, weights: any) =>
    faker.random.arrayElement(
        values.reduce(
            (acc: any, value: any, index: any) =>
                acc.concat(new Array(weights[index]).fill(value)),
            []
        )
    );

export const weightedBoolean = (likelyhood: any) =>
    faker.datatype.number(99) < likelyhood;

export const randomDate = (minDate?: Date, maxDate?: Date) => {
    const minTs =
        minDate instanceof Date
            ? minDate.getTime()
            : Date.now() - 5 * 365 * 24 * 60 * 60 * 1000; // 5 years
    const maxTs = maxDate instanceof Date ? maxDate.getTime() : Date.now();
    const range = maxTs - minTs;
    const randomRange = faker.datatype.number({ max: range });
    // move it more towards today to account for traffic increase
    const ts = Math.sqrt(randomRange / range) * range;
    return new Date(minTs + ts);
};

export const randomFloat = (min: any, max: any) =>
    parseFloat(faker.datatype.number({ min, max, precision: 0.01 }).toFixed(2));

export const randomInt = (min: any, max: any) =>
    parseFloat(faker.datatype.number({ min, max, precision: 1 }).toFixed(0));

export const uniqueArray = (value: any, index: any, self: string | any[]) => self.indexOf(value) === index