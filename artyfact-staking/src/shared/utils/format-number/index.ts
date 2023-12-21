export const formatNumber = (
  value: number | string,
  options: Intl.NumberFormatOptions = { maximumFractionDigits: 2 },
) => {
  return new Intl.NumberFormat('en-EN', options).format(Number(value))
}
