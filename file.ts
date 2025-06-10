function foo(bar: number): string {
  console.log(bar);
  return `hello + ${bar}`;
}

let return_value = foo(42);
console.log(return_value);