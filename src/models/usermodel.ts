import { Schema, model, connect } from 'mongoose';
import { IUser } from './../interfaces/userInterface';

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
    createdAt: { type: String, required: true },
    email: { type: String, required: true },
});



export const UserModel = model<IUser>('User', userSchema);