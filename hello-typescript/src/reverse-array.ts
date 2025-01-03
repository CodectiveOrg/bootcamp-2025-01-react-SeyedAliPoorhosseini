function reverseArray(numbers: number[]): number[] {
  const numbersReverse = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbersReverse.push(numbers[i]);
  }
  return numbersReverse;
}
console.log(reverseArray([1, 2, 3]));
