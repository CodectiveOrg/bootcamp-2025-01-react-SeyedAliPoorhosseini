function reverseArray<T>(numbers: T[]): T[] {
  const numbersReverse = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbersReverse.push(numbers[i]);
  }
  return numbersReverse;
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([true, false]));
