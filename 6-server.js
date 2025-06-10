import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer(async (req, res) => {
  //Response html
  // const htmlFile = await readFile("./index.html", "utf-8");
  // res.writeHead(200, { "Content-Type": "text/html" }); //不写浏览器也能正确识别
  // ===========================================================================
  // res.end(htmlFile);
  //Response plain text
  // const htmlFile = await readFile("./index.html", "utf-8");
  // res.writeHead(200, { "Content-Type": "text/plain" }); //不写浏览器也能正确识别
  // res.end(htmlFile);
  // ===========================================================================
  //Response json
  const jsonFile = await readFile("./data.json", "utf-8");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(jsonFile);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
