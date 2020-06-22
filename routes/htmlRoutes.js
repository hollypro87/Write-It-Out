const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (req, res) => {
  const homePost = await db.Post.findAll({});

  res.render("./layouts/main", {
    msg: "Welcome!",
    examples: homePost,
  });
});

// Load entry form  page and pass in an example by id

htmlRoutes.get("/entry-form", async (req, res) => {
  const options = {
    where: {
      id: req.params.id,
    },
  };

  const entryForm = await db.Post.findOne(options);

  res.render("entryForm");
});

// should load the reader page.

htmlRoutes.get("/reader", async (req, res) => {
  const readerPost = await db.Post.findAll({});

  res.render("reader", {
    posts: readerPost,
  });
});

// should render the log in page

htmlRoutes.get("/login", async (req, res) => {
  const options = {
    where: {
      id: req.params.id,
    },
  };

  // const dbExample = await db.Example.findOne(options);
  // Replaced db.example with db.Users and findOne with findAll
  const login = await db.Users.findAll({});
  res.render("login");
});

htmlRoutes.get("/search", function (req, res) {
  var search = req.body.search;
  let results = [];
  db.Posts.findAll({})
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

htmlRoutes.post("/startSearch", function (req, res) {
  search = req.body.search;
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
