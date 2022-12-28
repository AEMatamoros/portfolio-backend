import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";

const getUsers = async (req: Request, res: Response) => {
    try {
        let users = await UserModel.find({}).select(
            "_id username rol createdAt email"
        )
        res.json({
            title: "Succes",
            ok: false,
            users
        })
    } catch (error) {
        res.status(400).json({
            title: "Error ocurred",
            ok: false,
            error
        })
    }
}

export { getUsers }