const express = require("express")

const tourController = require("../controllers/tourControllers")

const router = express.Router()

// middleware
// router.param("id", tourController.checkId)

router
  .route("/")
  .get(tourController.getAllToursModels)

router
  .route("/model")
  .post(tourController.createTourModel)

router
  .route("/:id")
  .get(tourController.getTourByIdModel)
  .patch(tourController.editTourModels)
  .delete(tourController.removeTourModel)

module.exports = router
