const doQuery = require("./doQuery");

// put this in /src/routes/api/queries/funding-table.js
// do a fetch call for this funding-table through...
// await fetch("/api/queries/funding-table")

module.exports = async function fundingTableQuery() {
  // Do the query
  const rows = await doQuery(`
    SELECT folder_id, friendly_name, funded_amount, POP_start, POP_end 
    FROM tcat-dashboard-dev-338922.state_birm_data.funding 
    LIMIT 1000
  `);

  // Map the results
  const mappedResults = rows.map((row) => {
    const {folder_id, friendly_name, funded_amount, POP_start, POP_end} = row;
    console.log({
      folder_id,
      friendly_name,
      funded_amount: parseFloat(funded_amount.toString()),
      POP_start,
      POP_end
    })
  });

  // return the results
  return mappedResults;
}