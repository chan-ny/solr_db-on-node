const exoress = require("express");
const app = exoress();
const solr_client = require("./db");

app.get("/s", async (req, res) => {
  await solr_client
    .query()
    .q({
      compName_s: "Dell, Inc.",
      address_s: "One Dell Way Round Rock, Texas 78682",
    })
    .addParams({ wt: "xml", indent: true })
    .start(0)
    .rows(1);
});
//get
var strQuery = solr_client.query().q("id:corsair");
app.get("/", async (req, res) => {
  await solr_client.search(strQuery, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.send({
      rs: result.response,
    });
  });
});

//update
var data = {
  id: "dell",
  compName_s: "computer for developer",
  address_s: "HP",
};
app.get("/up", async (req, res) => {
  await solr_client.update(data, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.send({
      rs: result.response,
    });
  });
});

//del
var objdel = { id: "dell" };
app.get("/del", async (req, res) => {
  await solr_client.delete(objdel, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    res.send({
      rs: result.response,
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running....");
});
