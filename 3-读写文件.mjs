import { appendFile, readFile, writeFile } from "node:fs/promises";
async function readData() {
  try {
    const data = await readFile("./data.json", "utf-8");
    console.log(data);
    const jsonData = JSON.parse(data);
    console.log(jsonData);

    // await writeFile("./data.json", "这是一个测试", "utf-8")
    //   .then(() => {
    //     console.log("文件写入成功");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing file:", error);
    //   });
    // await appendFile("./data.json", JSON.stringify(jsonData, null, 2), "utf-8");
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readData();
