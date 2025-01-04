function getCountNumberInItems(items: unknown[]): number | null {
  let countNumber = 0;
  items.forEach((item) => {
    if (typeof item === "number") {
      countNumber++;
    }
  });
  return countNumber;
}
console.log(getCountNumberInItems([1, "ts", 2, "js", 3, true]));
