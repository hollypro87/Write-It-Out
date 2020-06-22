const Router = require("express").Router;
const postRoutes = require("./post-routes");

const apiRoutes = Router();

apiRoutes.use("/post-routes", postRoutes);

module.exports = apiRoutes;
