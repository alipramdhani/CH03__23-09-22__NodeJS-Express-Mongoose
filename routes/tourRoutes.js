const express = require("express")

const tourController = require("../controllers/tourControllers")

const router = express.Router()

// middleware
router.param("id", tourController.checkId)

router
  .route("/")
  .get(tourController.getAllTours)
  .post(
    tourController.checkBody,
    tourController.createTour
  )

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.editTour)
  .delete(tourController.removeTour)

module.exports = router
