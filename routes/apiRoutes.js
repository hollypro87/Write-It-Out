const Router = require("express").Router;
const db = require("../models");
var passport = require("../config/passport");

const apiRoutes = Router();

apiRoutes.get("/api/posts", function (req, res) {
    db.Post.findAll({
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

apiRoutes.get("/api/posts/:id", function (req, res) {
    db.Post.findAll({
        where: {
            id: req.params.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});


apiRoutes.post("/api/posts", function (req, res) {
    console.log("hit post");

    db.Post.create(req.body).then(function (dbPost) {
        res.json(dbPost);
    });
});

apiRoutes.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
});

apiRoutes.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});


module.exports = apiRoutes;
