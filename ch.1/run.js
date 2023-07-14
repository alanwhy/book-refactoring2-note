const plays = require("./plays.json");
const invoices = require("./invoices.json");
const { statement } = require("./statement");

for (let i = 0; i < invoices.length; i++) {
  const invoice = invoices[i];
  console.log(statement(invoice, plays));
}
