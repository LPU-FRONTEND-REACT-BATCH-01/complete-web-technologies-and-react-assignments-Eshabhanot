let a: number = 4;
function processValue(value: unknown): unknown {
  if (typeof value === "number") {
    return value + 100;
  }

  if (typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return value;
}

console.log(processValue(50));
console.log(processValue("hello"));
console.log(processValue(true));