const express = require("express");
const serviceController = require("../controller/serviceController");

const serviceRouter = express.Router();

serviceRouter
  .route("/")
  .get(serviceController.getAllServices)
  .post(serviceController.createService);
serviceRouter
  .route("/:id")
  .delete(serviceController.deleteService)
  .patch(serviceController.updateSerivce);

module.exports = serviceRouter;
