import { GoogleGenerativeAI } from "@google/generative-ai";
import { IUserType } from "../utils/types";

export async function generateFitnessAdvice(userProfile: IUserType) {
    const api_key = process.env.GEMINI_API_KEY as string
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        Generate personalized fitness advice based on the following user profile:
        - Age: ${userProfile.age}
        - Gender: ${userProfile.gender}
        - Current Weight: ${userProfile.weight} kg
        - Height: ${userProfile.height} ft
        - Fitness Goal: Weight loss and muscle toning
        - Target Areas: Core strength, upper body, and overall conditioning
        - Exercise Experience: Beginner to intermediate
        - Available Equipment: Basic home gym equipment and bodyweight exercises
        - Time Commitment: 3-4 sessions per week
        
        Provide a detailed, motivational, and scientifically-backed fitness plan.
      `;

    const result = await model.generateContent(prompt);
    return result.response.text();
}

export async function generateNutritionPlan(userProfile: IUserType) {
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
          
          Provide a comprehensive daily meal plan with:
          - Recommended calorie intake
          - Macronutrient breakdown (proteins, carbs, fats)
          - Sample meals for breakfast, lunch, dinner, and snacks
        - Meal timing recommendations
        - Hydration guidelines
        - Essential vitamins and minerals to focus on
        - Foods to avoid or limit
        - Special considerations based on fitness goals
        - Tips for meal prep and planning
        - Suggestions for healthy snacking
        - Guidelines for pre and post-workout nutrition
        - Recommendations for supplements (if needed)
        Please provide scientific reasoning and evidence-based recommendations.
        `;

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Error generating nutrition plan:', error);
        throw new Error('Failed to generate nutrition plan');
    }
}