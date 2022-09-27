import {Router} from 'express';

import {  userController } from './controllers/usersController';

const routes = Router();
const userController=new userController()
routes.get('/users' , userController.listarUsuario);

routes.post('/users' , userController.criarUsuario);


export { routes }