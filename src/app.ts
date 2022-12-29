import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
const morgan = require('morgan');
import DB from './conf/db';

//ROUTES IMPORT
import authRouter from './routes/auth.routes';
import usersRouter from './routes/users.routes';
import proyectsRouter from './routes/proyects.routes';

//INIT
const app = express();
DB.ConnectDB();

//CONFS
app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

//ROUTES
app.use(authRouter);
app.use(usersRouter);
app.use(proyectsRouter);

app.get('/', (req, res) => {
    res.send('Portfolio - API');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

// Create Build npx tsc