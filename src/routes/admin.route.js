import * as AdminController from '../app/http/controllers/admin.controller';
import express from 'express';
import isAuthAdmin from '../app/http/middlewares/authAdmin.middleware';

const AdminRouter = express.Router();

AdminRouter.post('/login', AdminController.Login);
AdminRouter.post('/register', AdminController.Register);
AdminRouter.put('/update-info', isAuthAdmin, AdminController.updateInfo);
AdminRouter.put('/change-password', isAuthAdmin, AdminController.changePassword);
AdminRouter.put('/change-avatar', isAuthAdmin, AdminController.changeAvatar);
AdminRouter.get('/get-info', isAuthAdmin, AdminController.getInfo);

export default AdminRouter;
