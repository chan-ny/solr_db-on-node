var SolrNode = require("solr-node");

// Create client
var client = new SolrNode({
  host: "150.95.82.134",
  port: "8983",
  core: "chan_data",
  protocol: "http",
});

// Set logger level (can be set to DEBUG, INFO, WARN, ERROR, FATAL or OFF)
require("log4js").getLogger("solr-node").level = "DEBUG";

module.exports = client;
