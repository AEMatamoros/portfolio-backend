import { Schema, model, connect } from 'mongoose';
import { IProyect } from '../interfaces/proyectInterface';

const proyectSchema = new Schema<IProyect>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    localimg: { type: String, required: true },
    date: { type: String, required: true },
    tenologies: { type: [], required: true },
    demoUrl: { type: String, required: true },

});

export const UserModel = model<IProyect>('Proyect', proyectSchema);