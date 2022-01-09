export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'NOK',
    minimumFractionDigits: 2,
  };
  if (amount % 10 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat('nb-NO', options);

  return formatter.format(amount / 10);
}
