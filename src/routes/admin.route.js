const AdminController = require("../app/http/controllers/admin.controller");
const express = require("express");
const isAuthAdmin = require("../app/http/middlewares/authAdmin.middleware");

const AdminRouter = express.Router();

AdminRouter.post("/login", AdminController.Login);
AdminRouter.post("/register", AdminController.Register);
AdminRouter.put("/update-info", isAuthAdmin, AdminController.updateInfo);
AdminRouter.put(
  "/change-password",
  isAuthAdmin,
  AdminController.changePassword
);
AdminRouter.put("/change-avatar", isAuthAdmin, AdminController.changeAvatar);
AdminRouter.get("/get-info", isAuthAdmin, AdminController.getInfo);

module.exports = AdminRouter;
