import {
  Register,
  Login,
  getAllUser,
  getInfoUser,
  updateInfo,
  changeAvatar,
  changePassword,
  deleteUser,
} from "../app/http/controllers/user.controller";
import isAuth from "../app/http/middlewares/auth.middleware";
import isAuthAdmin from "../app/http/middlewares/authAdmin.middleware";
import express from "express";

const UserRouter = express.Router();

UserRouter.post("/register", Register);
UserRouter.post("/login", Login);
UserRouter.get("/get-info-user", isAuth, getInfoUser);
UserRouter.put("/update-info", isAuth, updateInfo);
UserRouter.put("/change-password", isAuth, changePassword);
UserRouter.put("/change-avatar", isAuth, changeAvatar);
UserRouter.delete("/delete/:id", isAuthAdmin, deleteUser);
UserRouter.get("/", isAuthAdmin, getAllUser);

export default UserRouter;
