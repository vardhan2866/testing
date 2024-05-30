import { Request, Response } from "express";

interface CustomError {
  statusCode: number;
  message: string;
  status: boolean;
}

const errorHandle = (
  err: CustomError,
  req: Request,
  res: Response
): Response => {
  const statusCode: number = err.statusCode || 500;
  const message: string = err.message || "Internal Server Error";
  const status: boolean = err.status || false;

  return res.status(statusCode).send({
    statusCode: statusCode,
    message: message,
    status: status,
  });
};

export {errorHandle};
