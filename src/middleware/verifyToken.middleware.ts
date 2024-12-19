import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asyncHandler";

interface AuthRequest extends Request {
    user?: any;
}

export const verifyToken = asyncHandler(async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    const JWT_SECRET = process.env.JWT_TOKEN as string;
    if (!token){
        res.status(401).send({ message: 'Access Denied' });
        return;
    } 
    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        console.log("verified:", verified);        
        next();
    } catch (error) {
        res.status(403).send({ message: 'Invalid token' });
    }
})