const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CauHoi = new Schema({
  noidung: {
    type: String,
    required: true,
  },
  NguoiDung: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "NguoiDung",
  },
  thoigian: {
    type: Date,
  },
  tieude: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CauHoi", CauHoi);

