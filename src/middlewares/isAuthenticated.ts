import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Paylaod {
  sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  // Receber o token 
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  // desconstruir a string, ignorando o bearer com "," e armazenando o token dentro do segundo paramentro do array -> token
  const [, token] = authToken.split(' ')

  try {
    // validar o token
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Paylaod

    req.user_id = sub;
    

    return next()

  } catch (err) {
    return res.status(401).end()
  }
}