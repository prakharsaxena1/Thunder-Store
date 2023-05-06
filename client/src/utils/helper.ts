/* eslint-disable max-len */

export const getPrice = (price: number, discount: number) => Math.round(price * (1 - discount / 100));

export const writeLS = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data));

export const getFromLS = (key: string, defaultReturn: any) => {
  const item = localStorage.getItem(key);
  let parsedItem = defaultReturn;
  if (item !== null) {
    parsedItem = JSON.parse(item);
  }
  return parsedItem;
};

export const clearLS = () => {
  window.localStorage.clear();
};

export const maskCardNumber = (cardNumber: string) => `XXXXXXXX${cardNumber.slice(12)}`;
