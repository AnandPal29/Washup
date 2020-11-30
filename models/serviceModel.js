const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Service Must have a name"],
    maxlength: [40, "A Service Must have less or equal 40 charachters "],
    minlength: [7, "A Servcie Must have more than 7 Character "],
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "A Sercie Must have a price"],
  },
  duration: {
    type: Number,
    required: [true, "A Service Must Have a Price"],
  },
  description: {
    type: String,
  },
  averageRating: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
});

const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;
