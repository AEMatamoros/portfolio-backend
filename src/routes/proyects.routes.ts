import { verifyToken } from '../helpers/jwt'
import { getProyects, postProyect, updateProyect, deleteProyect } from '../controllers/proyects.controller';

const proyectsRouter = require('express').Router();;

proyectsRouter.get('/api/proyects', getProyects, () => { })

proyectsRouter.post('/api/proyects', postProyect, verifyToken, () => { })

proyectsRouter.put('/api/proyects/:id', updateProyect, verifyToken, () => { })

proyectsRouter.delete('/api/proyects/:id', deleteProyect, verifyToken, () => { })

export default proyectsRouter;