import test from "node:test";
import assert from "node:assert";
import { listInvoices } from "../src/invoices.js";

test("lists two invoices", () => assert.equal(listInvoices().length, 2));
