const jwtHelper = require("../../../helper/jwt.helper");
const AdminModel = require("../../../models/admin.model");

const isAuthAdmin = async (req, res, next) => {
  const tokenFromClient = req.headers["authorization"]
    ?.split(" ")[1]
    .replace(/"/g, "");
  if (!tokenFromClient) {
    return res.status(401).json({
      success: false,
      message: "Vui lòng đăng nhập để truy cập tài nguyên này!",
    });
  }

  const isVerifyToken = jwtHelper.verifyToken(tokenFromClient);
  if (!isVerifyToken) {
    return res.status(401).json({
      success: false,
      message: "Bạn không có quyền truy cập tính năng này!",
    });
  }
  req.user = await AdminModel.findById(isVerifyToken.id);
  return next();
};

module.exports = isAuthAdmin;
