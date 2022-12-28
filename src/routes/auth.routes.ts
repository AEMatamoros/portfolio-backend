import { registerUser, loginUser } from '../controllers/auth.controller';
import {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
} from '../helpers/verify';

const authRouter = require('express').Router()

authRouter.post("/api/auth/signin", loginUser);

authRouter.post("/api/auth/signup", checkDuplicateUsernameOrEmail, checkRolesExisted, registerUser);

export default authRouter