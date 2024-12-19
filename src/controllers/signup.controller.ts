import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../db";

export const signUp = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { name, email, password, age, gender, weight, height } = req.body;
        const saltRounds = 10;
        const existingUser = await prisma.user.findUnique({
            where: { email: "example@example.com" },
        });

        if (existingUser) {
            console.log("User already exists");
        } else {
            bcrypt.hash(password, saltRounds, async function (err, hash) {
                // Store hash in your password DB.
                const signUp = await prisma.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: hash,
                        age: age,
                        gender: gender,
                        weight: weight,
                        height: height
                    }
                })
                res.status(200).send({ message: "SignUp Successfull", signUp });
                console.log(signUp);

            });
        }
    } catch (error) {
        res.send(error);
    }
})