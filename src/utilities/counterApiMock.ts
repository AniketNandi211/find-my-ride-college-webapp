
export const asyncCounterGenerator = (num: number, timeout: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve(num);
            } else {
                reject({ message: 'Error' });
            }
        }, timeout);
    });
}