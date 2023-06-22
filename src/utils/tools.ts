import dayjs from 'dayjs'

export function formatNumber(number: number | undefined) {
  return number ? (number > 9999 ? `${(number / 1000).toFixed(1)}K` : String(number)) : '0'
}

export function formatDateForDynamicPost(date: number) {
  return dayjs(date).format('MM/DD mm:hh:ss')
}
