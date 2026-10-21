import http from "node:http";
import { listInvoices } from "./invoices.js";

http
  .createServer((req, res) => {
    if (req.url === "/invoices") {
      res.setHeader("content-type", "application/json");
      return res.end(JSON.stringify(listInvoices()));
    }
    res.statusCode = 404;
    res.end("not found");
  })
  .listen(3000);
