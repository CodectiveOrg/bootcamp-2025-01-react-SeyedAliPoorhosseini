function countNumberInItems(items: (number | string)[]): number {
  const numericItems = [];
  for (let i = 0; i < items.length; i++) {
    if (typeof items[i] === "number") {
      numericItems.push(items[i]);
    }
  }
  return numericItems.length;
}
console.log(countNumberInItems([1, "ts", 2, "js", 3]));
