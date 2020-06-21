const Router = require("express").Router;
const { Example } = require("../../models");

const exampleRoutes = Router();

// Get all examples
exampleRoutes
  .route("/")

  .get(async (_req, res) => {
    const dbExamples = await Example.findAll();
    res.json(dbExamples);
  })

  .post(async (req, res) => {
    const dbExample = await Example.create(req.body);
    res.json(dbExample);
  });

// Delete an example by id
exampleRoutes
  .route("/:id")
  .put(async (_req, res) => {
    res.status(501).end();
  })
  .delete(async (req, res) => {
    const options = {
      where: {
        id: req.params.id,
      },
    };
    const dbExample = await Example.destroy(options);
    res.json(dbExample);
  });

//Search
app.get("/search", function (req, res) {
  var search = req.body.search;
  let results = [];
  //verify the db table?
  db.Post.findAll({})
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        var n = data[i].title.toLowerCase().includes(search.toLowerCase());
        if (n) {
          results.push(data[i]);
        }
      }
      res.render("search", { searchData: results });
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.post("/startSearch", function (req, res) {
  search = req.body.search;
});

module.exports = exampleRoutes;
