export function formatCurrency(number) {
  return number
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .substring(1)
    .replace(',', ' ');
}
