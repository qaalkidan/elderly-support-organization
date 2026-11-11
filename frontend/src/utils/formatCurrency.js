export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  if (amount === null || amount === undefined) return '';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export function parseCurrency(value) {
  if (!value) return 0;
  
  // Remove currency symbols and formatting
  const cleaned = value.toString().replace(/[^0-9.-]/g, '');
  return parseFloat(cleaned) || 0;
}
