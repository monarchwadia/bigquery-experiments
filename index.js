const fundingTableQuery = require("./queries/fundingTableQuery");

async function query() {
  await fundingTableQuery();
}

console.log("STARTING");
query()
  .then(() => console.log("SUCCESS!"))
  .catch(e => console.log("ERROR!", e));