export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`;
};
