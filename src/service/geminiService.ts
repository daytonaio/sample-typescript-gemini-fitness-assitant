import { GoogleGenerativeAI } from "@google/generative-ai";
import { IUserType } from "../utils/types";

export async function generateFitnessAdvice(userProfile: IUserType, fitnessGoal: string) {
    const api_key = process.env.GEMINI_API_KEY as string
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        Generate personalized fitness advice based on the following user profile:
        - Age: ${userProfile.age}
        - Gender: ${userProfile.gender}
        - Current Weight: ${userProfile.weight} kg
        - Height: ${userProfile.height} ft
        - Fitness Goal: ${fitnessGoal}
        
        Provide a detailed, motivational, and scientifically-backed fitness plan.
      `;

    const result = await model.generateContent(prompt);
    return result.response.text();
}

export async function generateNutritionPlan(userProfile: IUserType, fitnessGoal: string) {
    try {
        const api_key = process.env.GEMINI_API_KEY as string
        const genAI = new GoogleGenerativeAI(api_key);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
          Create a nutrition plan tailored to:
          - Age: ${userProfile.age}
          - Gender: ${userProfile.gender}
          - Current Weight: ${userProfile.weight} kg
          - Height: ${userProfile.height} cm
          - Fitness Goal: ${fitnessGoal}
          
          Provide a comprehensive meal plan with macronutrient breakdown.
        `;

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Error generating nutrition plan:', error);
        throw new Error('Failed to generate nutrition plan');
    }
}