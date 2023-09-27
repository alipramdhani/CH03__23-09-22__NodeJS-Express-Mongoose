const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema({
  // atribut
  name: {
    //validator
    type: String,
    required: [true, "Nama tour harus ada"],
    unique: true,
  },
  rating: {
    //validator
    type: Number,
    default: 4,
  },
  price: {
    //validator
    type: Number,
    required: [true, "Harga nya harus ada"],
  },
})

const Tour = mongoose.model("Tour", tourSchema)

// const testTour = new Tour({
//   rating: 4.8,
//   price: 20000
// })

// testTour.save()

module.exports = Tour
