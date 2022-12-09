import * as UserController from "../app/http/controllers/user.controller";
import isAuth from "../app/http/middlewares/auth.middleware";
import isAuthAdmin from "../app/http/middlewares/authAdmin.middleware";
import express from "express";

const UserRouter = express.Router();

UserRouter.post("/register", UserController.Register);
UserRouter.post("/login", UserController.Login);
UserRouter.get("/get-info-user", isAuth, UserController.getInfoUser);
UserRouter.put("/update-info", isAuth, UserController.updateInfo);
UserRouter.put("/change-password", isAuth, UserController.changePassword);
UserRouter.put("/change-avatar", isAuth, UserController.changeAvatar);
UserRouter.delete("/delete/:id", isAuthAdmin, UserController.deleteUser);
UserRouter.get("/", isAuthAdmin, UserController.getAllUser);

export default UserRouter;
