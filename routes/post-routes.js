var db = require("../models");

module.exports = function (app) {

    // getting all of the posts
    app.get("/api/post", function (req, res) {
        var query = {};
        if (req.query.post_id) {
            query.PostId = req.query.post_id;
        }
        db.Post.findAll({
            where: query
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // retrieving a single post
    app.get("/api/post/:id", function (req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            console.log(dbPost);
            res.json(dbPost);
        });
    });

    // saving a new post
    app.post("/api/post", function (req, res) {
        db.Post.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // deleting posts
    app.delete("/api/post/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // updating posts
    app.put("/api/post", function (req, res) {
        db.Post.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
};