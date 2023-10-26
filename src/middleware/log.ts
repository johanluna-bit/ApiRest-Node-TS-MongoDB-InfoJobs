import { NextFunction, Request, Response } from "express";


const logMiddleware = (req:Request, res:Response, next:NextFunction) => {
    console.log("Log funcionando...")
    next();

};

export {logMiddleware};