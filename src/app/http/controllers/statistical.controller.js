const StatisticalModel = require("../../../models/statistical.model");

const getAllStatistical = async (req, res, next) => {
  try {
    const statistical = await StatisticalModel.find();
    res.status(200).json({
      success: true,
      message: "Thành công.",
      data: statistical,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getAllStatistical };
