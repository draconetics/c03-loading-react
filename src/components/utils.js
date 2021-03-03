/* eslint-disable import/prefer-default-export */
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const sum = (cartList) => {
  let total = 0;
  total = cartList.reduce((a, b) => {
    const first = typeof a === 'object' ? a.size : a;
    const second = typeof b === 'object' ? b.size : b;
    return first + second;
  }, 0);
  return total;
};
