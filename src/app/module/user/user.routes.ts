import express from 'express';
import { UserController } from './user.controller';
import { Verifytoken } from '../../shared/middleware/token';

const route = express();

//handleRegiser
route.post('/create-user', UserController.createUser);
//hadlelogin
route.post('/login', Verifytoken, UserController.login);
//find all proudct
route.get('/allproudct', Verifytoken, UserController.getAllproduct);
//find all order
route.get('/allorder', Verifytoken, UserController.getAllorder);

export const UserRoute = route;
