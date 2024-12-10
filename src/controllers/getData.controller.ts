import prisma from "../db";
import { generateFitnessAdvice, generateNutritionPlan } from "../service/geminiService";
import { asyncHandler } from "../utils/asyncHandler";

export const getFitnessAdvice = asyncHandler (async (req,res)=>{
    try {
        const {email, fitnessGoal} = req.body;
        const data = await prisma.user.findUnique ({
            where: {
                email: email
            }
        })
        if (data){
            const user = {
                age: data.age,
                height: data.height,
                gender: data.gender,
                weight: data.weight
            }
            const response = await generateFitnessAdvice(user, fitnessGoal);
            // await prisma.user.create({
            //     where:{
            //         email: email
            //     },
            //     data:{
            //         fitnessAdvice: response.data as string
            //     }
            // })
            res.send (response);
        }
        res.send ("Empty data");

    } catch (error) {
        res.send('get fitness advice error: '+ error);
    }
})


export const getNutritionAdvice = asyncHandler (async (req,res)=>{
    try {
        const {email, fitnessGoal} = req.body;
        const data = await prisma.user.findUnique ({
            where: {
                email: email
            }
        })
        if (data){
            const user = {
                age: data.age,
                height: data.height,
                gender: data.gender,
                weight: data.weight
            }
            const response = await generateNutritionPlan(user, fitnessGoal);
            res.send (response);
        }
        res.send ("Empty data");

    } catch (error) {
        res.send('get fitness advice error: '+ error);
    }
})