// 1. 创建一个Buffer
// Buffer.from(string[, encoding])
// Buffer.from(buffer)
// Buffer.from(array)
const buf1 = Buffer.from("hello");
const buf2 = Buffer.from("world", "utf8");
const buf3 = Buffer.from(buf1);
const buf4 = Buffer.from([10, 20, 30]);

console.log(buf1); // <Buffer 68 65 6c 6c 6f>
console.log(buf2); // <Buffer 77 6f 72 6c 64>
console.log(buf3); // <Buffer 68 65 6c 6c 6f>
console.log(buf4); // <Buffer 0a 14 1e>

// Buffer.alloc(size[, fill[, encoding]])
// Buffer.allocUnsafe(size)
const buf5 = Buffer.alloc(10); // 创建一个大小为10的Buffer，并用0填充
console.log(buf5); // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf6 = Buffer.alloc(10, 1); // 创建一个大小为10的Buffer，并用1填充
console.log(buf6); // <Buffer 01 01 01 01 01 01 01 01 01 01>

const buf7 = Buffer.allocUnsafe(10); // 创建一个大小为10的Buffer，不初始化，可能包含旧数据
console.log(buf7); // <Buffer 00 00 00 00 00 00 00 00 00 00> (输出可能不同)

// 2. Buffer的写入
// buf.write(string[, offset[, length[, encoding]]])
const buf8 = Buffer.alloc(10);
buf8.write("hello");
console.log(buf8); // <Buffer 68 65 6c 6c 6f 00 00 0
