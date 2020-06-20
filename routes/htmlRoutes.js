const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (req, res) => {
  const dbExamples = await db.Example.findAll({});

  res.render("index", {
    msg: "Welcome!",
    examples: dbExamples,
  });
});

// Load entry form  page and pass in an example by id

htmlRoutes.get("/entry-form", async (req, res) => {
  const options = {
    where: {
      id: req.params.id,
    },
  };

  const dbExample = await db.Example.findOne(options);

  res.render("entry-form");
});

// should load the reader page. 

htmlRoutes.get("/reader", async (req, res) => {
  const options = {
    where: {
      id: req.params.id,
    },
  };

  const dbExample = await db.Example.findOne(options);

  res.render("reader");
});

// Render 404 page for any unmatched routes
htmlRoutes.get("*", async (req, res) => {
  res.render("404");
});

module.exports = htmlRoutes;
