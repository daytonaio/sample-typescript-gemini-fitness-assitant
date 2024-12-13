<div align="center">

# Fitness Assistant

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Daytona](https://img.shields.io/badge/Daytona-000000?style=for-the-badge&logo=daytona&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-FF4500?style=for-the-badge&logo=gemini&logoColor=white)

</div>

## Sample TypeScript using Node.js

This project demonstrates how to build a fitness assistant application using Node.js, TypeScript, and the Gemini API, and is designed to be used with Daytona. It includes features such as user authentication, get fitness advice, and get nutrition advice.

## 🚀 Getting Started

### Open Using Daytona

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).
2. **Create the Workspace**:

   ```bash
   daytona create https://github.com/Thund3rHawk/fitness-assistant.git
   ```

3. **Explore the Project Routes**:

   The fitness assistant application provides several routes to interact with the system. Below are the main routes available:

   - **User Authentication**:

     - `POST /api/v1/auth/sign-up`: Register a new user.
     - `POST /api/v1/auth/sign-in`: Authenticate an existing user and obtain a token.

   - **Fitness Advice**:

     - `POST /api/v1/getFitnessAdvice`: Get personalized fitness advice based on user data.

   - **Nutrition Advice**:
     - `POST /api/v1/getNutritionAdvice`: Get personalized nutrition advice based on user data.

   Each route is designed to handle specific tasks and return appropriate responses. Ensure you have the necessary authentication tokens when accessing protected routes.

4. **Start the Application**:
   ```bash
   npm run dev
   ```

---

## ✨ Features
- **Framework**: Built using Node.js and TypeScript, ensuring a robust and scalable architecture.
- **User Authentication**: Secure user registration and login functionality.
- **Fitness Advice**: Personalized fitness recommendations based on user data.
- **Nutrition Advice**: Tailored nutrition guidance to help users meet their health goals.
- **API Integration**: Seamless integration with the Gemini API for enhanced functionality.
- **Daytona Compatibility**: Easily deployable and manageable within the Daytona environment.

List of sample features (e.g. realtime chat app, standardized development environment with devcontainers)
