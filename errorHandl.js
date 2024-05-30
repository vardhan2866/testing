
const errorHandle = (err, req, res, next) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const status = err.status || false;

    return res.status(statusCode).send({
        statusCode: statusCode,
        message: message,
        status: status
    })


};

module.exports = errorHandle



/*

import { Request, Response, NextFunction } from 'express';

const errorHandle = (err: any, req: Request, res: Response, next: NextFunction): Response => {
    const statusCode: number = err.statusCode || 500;
    const message: string = err.message || "Internal Server Error";
    const status: boolean = err.status || false;

    return res.status(statusCode).send({
        statusCode: statusCode,
        message: message,
        status: status
    });
};

export default errorHandle;




*/ 