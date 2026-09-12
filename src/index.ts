import { createServer } from "node:http";
createServer((_req, res) => { res.writeHead(200, {"content-type":"application/json"}); res.end('{"status":"ok"}'); }).listen(Number(process.env.PORT ?? 3000), "0.0.0.0");
