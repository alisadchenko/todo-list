export const sliceAddress = (address?: string | null, start = 4, end = 4) => {
  return address ? `${address.slice(0, start)}...${address.slice(-end)}` : ''
}
