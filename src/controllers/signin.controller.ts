import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { asyncHandler } from "../utils/asyncHandler";
import prisma from '../db';

export const signIn = asyncHandler(async (req, res) => {
    try {
        const JWT_SECRET = process.env.JWT_TOKEN as string;
        if (!JWT_SECRET) {
            res.status(500).send({ message: 'Internal server error: JWT secret is not set.' });
        }
        const { email, password } = req.body;
        const response = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!response) {
            res.send({ message: 'User not found' });
            return;
        }
        bcrypt.compare(password, response?.password, function (err, result) {
            if (result) {
                const token = jwt.sign({ email: response?.email, password: response?.password }, JWT_SECRET, { expiresIn: '2h' })
                res.status(200).send({ message: 'Authenticated', token });
            }
            else {
                res.send({ message: 'Wrong Password' });
            }
        });
    } catch (error) {
        res.send("signin error: " + error);
    }
})