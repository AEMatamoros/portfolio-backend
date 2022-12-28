import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import { getCurrentDate } from "../helpers/transform";
import { ROLES } from "../conf/db";

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const registerUser = async (req: Request, res: Response) => {

    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        rol: !!req.body.rol ? req.body.rol : ROLES[0],
        createdAt: getCurrentDate()

    });

    user.save((err, user) => {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).json(user)

    });
};

const loginUser = async (req: Request, res: Response) => {
    UserModel.findOne({
        username: req.body.username,
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({ message: "Invalid Password!" });
            }

            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 86400, // 24 hours
            });

            res.status(200).send({
                ...user["_doc"],
                accessToken: token
            });
        });
};



export { registerUser, loginUser }