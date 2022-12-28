export const numberToPrice = (value: number, currency: string = 'R$') => {
  return `${currency} ${value.toFixed(2).replace('.', ',')}`
}
