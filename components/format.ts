export const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
  }).format(n)