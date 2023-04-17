export const benefit = (capital: number, rate: number): number => {
  return capital * (rate / 100)
}

export const totalBenefit = (benefits: number[]): number => {
  let result = 0
  const sum = benefits.reduce((accumulator, currentValue) => accumulator + currentValue, result)
  return sum
}
