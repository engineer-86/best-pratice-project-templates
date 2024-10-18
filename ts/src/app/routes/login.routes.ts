import express from 'express';
import { loginUser } from '../controller/login.controller';

const loginRouter = express.Router();

loginRouter.post('/login', loginUser);

export default loginRouter;
