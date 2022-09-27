import {Router} from 'express';
import {  userController } from './controllers/usersController.js';

const routes = Router();


routes.get('/users' , userController.listarUsuario);

routes.post('/users' , userController.criarUsuario);


export { routes }