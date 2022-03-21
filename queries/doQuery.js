const {BigQuery} = require('@google-cloud/bigquery');

// put this one inside /src/utils/doQuery.js or /lib
module.exports = async function doQuery(queryString) {
  const bigquery = new BigQuery();
  
  // Run the query as a job
  const [job] = await bigquery.createQueryJob({
    query: queryString,
    location: 'US',
  });
  console.log(`Job ${job.id} started.`);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  return rows;
}