import { verifyToken } from '../helpers/jwt'
import { getUsers } from '../controllers/user.controller'
const usersRouter = require('express').Router()

usersRouter.post("/api/users", verifyToken, getUsers);

export default usersRouter