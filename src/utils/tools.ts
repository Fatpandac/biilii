export function formatNumber(number: number | undefined) {
  return number ? (number > 9999 ? `${(number / 1000).toFixed(1)}K` : String(number)) : ''
}
