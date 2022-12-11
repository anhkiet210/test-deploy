const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Statistical = new Schema({
  tukhoa: {
    la: {
      type: String,
    },
    than: {
      type: String,
    },
    re: {
      type: String,
    },
  },
  benh: {
    tenBenh: {
      type: String,
    },
    anh: {
      type: String,
      default:
        "https://res.cloudinary.com/ak210/image/upload/v1666934115/ak-tracuusaubenh/depositphotos_247872612-stock-illustration-no-image-available-icon-vector_gojmbi.webp",
    },
  },
  luot: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("ThongKe", Statistical);
