/* eslint-disable max-len */

export const getPrice = (price: number, discount: number) => Math.round(price * (1 - discount / 100));

export const writeLS = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data));

export const clearLS = () => {
  window.localStorage.clear();
};
