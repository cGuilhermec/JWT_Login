import { Router } from 'express';
import { UserController } from './controller/UserController';
import { AuthController } from './controller/AuthController';
import { AuthMiddlewares } from './middlewares/auth';

export const router = Router();

const userController = new UserController();
const authController = new AuthController();

router.post('/create', userController.store);
router.get('/users',  AuthMiddlewares, userController.index);
router.post('/auth', authController.authenticate);