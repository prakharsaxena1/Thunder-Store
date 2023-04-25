/* eslint-disable max-len */

export const getPrice = (price: number, discount: number) => Math.round(price * (1 - discount / 100));
