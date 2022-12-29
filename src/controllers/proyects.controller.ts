var mongoose = require('mongoose');
import express, { Request, Response } from "express";
const { ProyectModel } = require('../models/proyectModel');

const getProyects = async (req: Request, res: Response) => {

    try {
        let users = await ProyectModel.find();
        res.json({
            title: "Succes",
            ok: true,
            users
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            title: "Error ocurred",
            ok: false,
            err: error
        })
    }

};



const postProyect = async (req: Request, res: Response) => {

    try {
        let plan = new ProyectModel({
            ...req.body
        });
        let createdStatus = await plan.save()
        res.send(createdStatus)
    } catch (error) {
        res.status(400).json({
            title: "Error ocurred",
            ok: false,
            error
        })
    }

}

const updateProyect = async (req: Request, res: Response) => {

    try {
        let updatedStatus = await ProyectModel.updateOne(
            { "_id": req.params.id },
            { ...req.body })
        res.send(updatedStatus)
    } catch (error) {
        res.status(400).json({
            title: "Error ocurred",
            ok: false,
            error
        })
    }

}

const deleteProyect = async (req: Request, res: Response) => {

    try {
        let deletedStatus = await ProyectModel.remove({ "_id": req.params.id })
        res.send(deletedStatus)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            title: "Error ocurred",
            ok: false,
            error
        })
    }

}

export {
    getProyects,
    postProyect,
    updateProyect,
    deleteProyect
}