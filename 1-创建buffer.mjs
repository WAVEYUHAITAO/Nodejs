//1. alloc
// alloc creates a new buffer of a specified size and initializes it with zeroes
let buffer = Buffer.alloc(10);
console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>

//2. allocUnsafe
// allocUnsafe does not initialize the memory, so it may contain old data
// Use it only when you are sure to fill the buffer with new data immediately
let bufferUnsafe = Buffer.allocUnsafe(10000);
console.log(bufferUnsafe); 

//3. from
// Char
let bufferFromString = Buffer.from('Hello, World!');
// Decimal(Hello, World!的十进制值)
let bufferFromArray = Buffer.from([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
console.log(bufferFromString); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
console.log(bufferFromArray); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>