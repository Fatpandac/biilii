import dayjs from 'dayjs'

export function formatNumber(number: number | undefined) {
  if (!number)
    return '0'

  if (number >= 1000000)
    return `${(number / 1000000).toFixed(1)}M`

  if (number >= 10000)
    return `${(number / 1000).toFixed(1)}K`

  return `${number}`
}

export function formatDateForDynamicPost(date: number) {
  return dayjs(date).format('MM/DD mm:hh:ss')
}
