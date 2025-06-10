import { readFile } from "node:fs/promises";
import * as http from "node:http";
const server = http.createServer(async (req, res) => {
  // 获取请求的 URL
  const url = req.url;

  // 根据不同的 URL 返回不同的内容
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const htmlFile = await readFile("./index.html", "utf-8");
    res.end(htmlFile);
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const aboutFile = await readFile("./about.html", "utf-8");
    res.end(aboutFile);
  } else if (url === "/api/products") {
    // 返回 JSON 数据
    const products = [
      { id: 1, name: "产品1" },
      { id: 2, name: "产品2" },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } else {
    // 处理 404 Not Found
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`);
});
