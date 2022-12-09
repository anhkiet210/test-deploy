const {
  Register,
  Login,
  getAllUser,
  getInfoUser,
  updateInfo,
  changeAvatar,
  changePassword,
  deleteUser,
} = require("../app/http/controllers/user.controller");
const isAuth = require("../app/http/middlewares/auth.middleware");
const isAuthAdmin = require("../app/http/middlewares/authAdmin.middleware");
const express = require("express");

const UserRouter = express.Router();

UserRouter.post("/register", Register);
UserRouter.post("/login", Login);
UserRouter.get("/get-info-user", isAuth, getInfoUser);
UserRouter.put("/update-info", isAuth, updateInfo);
UserRouter.put("/change-password", isAuth, changePassword);
UserRouter.put("/change-avatar", isAuth, changeAvatar);
UserRouter.delete("/delete/:id", isAuthAdmin, deleteUser);
UserRouter.get("/", isAuthAdmin, getAllUser);

module.exports = UserRouter;
