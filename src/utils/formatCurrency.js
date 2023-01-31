export function formatCurrency(number) {
  return Math.abs(number)
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .substring(1)
    .replace(',', ' ');
}
