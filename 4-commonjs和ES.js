//老的写法,commonjs是sync的，同步加载模块，会造成服务器阻塞，效率较慢
// 使用require引入模块
// const fs = require("node:fs/promises");
// const fs = require("node:fs");
//ES6的写法,使用ESM不仅兼容浏览器，并且是async的加载模块
import { readFile } from "node:fs/promises"; //使用promise的方式异步读取文件
async function readData() {
  try {
    const data = await readFile("./data.json", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readData();
//readFile使用callback的方式异步读取文件,readFileSync使用同步的方式读取文件
// import { readFile, readFileSync } from "node:fs";
// readFile("./data.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// try {
//   const data = readFileSync("./data.json", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }
