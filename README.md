<div align="center">

# Fitness Assistant

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Daytona](https://img.shields.io/badge/Daytona-000000?style=for-the-badge&logo=daytona&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-FF4500?style=for-the-badge&logo=gemini&logoColor=white)

</div>

## Sample TypeScript using Express.js

This project demonstrates how to build a fitness assistant application using Node.js, TypeScript, and the Gemini API, and is designed to be used with Daytona. It includes features such as user authentication, get fitness advice, and get nutrition advice.

## 🚀 Getting Started

### Open Using Daytona

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).
2. **Create the Workspace**:

   ```bash
   daytona create https://github.com/Thund3rHawk/fitness-assistant.git
   ```

3. **Set Up Environment Variables**:

   Before running the application, you need to set up the environment variables. Follow these steps:

   1. **Create a `.env` file** in the root directory of the project.
   2. **Add the following environment variables** to the `.env` file:

      ```plaintext
      DATABASE_URL = your_mongodb_url
      GEMINI_API_KEY = your_gemini_api_key
      JWT_SECRET = your_jwt_secret_key
      ```

      Replace `your_mongodb_url`, `your_gemini_api_key`, and `your_jwt_secret_key` with your actual MongoDB URL, Gemini API key, and JWT secret key.

   3. **Save the `.env` file**.

   These environment variables are essential for the application to run correctly and securely.

<!-- 4. **Generate Prisma Client**:

   After setting up the environment variables, you need to generate the Prisma client. Run the following command:

   ```bash
   npx prisma generate
   ```

   This command will generate the Prisma client based on your Prisma schema, allowing you to interact with your MongoDB database using Prisma. -->

4. **Start the Application**:

   ```bash
   npm run dev
   ```

## 🛠️ Tech Stack

The Fitness Assistant project leverages a modern and efficient tech stack to deliver a high-quality application. Below are the key technologies used:

- **Node.js**: A powerful JavaScript runtime built on Chrome's V8 engine, used for building the server-side of the application.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Prisma**: An ORM (Object-Relational Mapping) tool that simplifies database interactions and ensures type safety with TypeScript.
- **MongoDB**: A NoSQL database that stores data in JSON-like documents, providing flexibility and scalability.
- **Gemini API**: An external API used to fetch fitness and nutrition data, enabling personalized advice for users.
- **Daytona**: A development environment that simplifies the process of creating, managing, and deploying applications.

This combination of technologies ensures that the Fitness Assistant application is scalable, maintainable, and easy to develop.

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>
   <img width="1710" alt="Screenshot 2024-12-17 at 12 48 47 AM" src="https://github.com/user-attachments/assets/0858a12a-25cb-41b1-971c-ee0673947580" />
   
   <img width="1710" alt="Screenshot 2024-12-17 at 12 50 42 AM" src="https://github.com/user-attachments/assets/d6f97517-036a-46bf-b403-cc68a13a147b" />
   
   <img width="1710" alt="Screenshot 2024-12-17 at 12 52 16 AM" src="https://github.com/user-attachments/assets/2634d222-2ccc-4f39-9d59-0f98b1a2682c" />   
   
   <img width="1710" alt="Screenshot 2024-12-17 at 1 42 20 AM" src="https://github.com/user-attachments/assets/fbc66cc6-6615-4690-89fb-3ddfd33498ba" />

</details>

## API Endpoints

Here are some of the key API endpoints provided by the fitness assistant application, along with sample request and response JSON:

### User Registration

   <details>
   <summary>Endpoint: `POST /api/v1/auth/sign-up`</summary>
      
   **Request**:
   ```json
   {
      "name": "john_doe",
      "email": "john@gmail.com",
      "password": "securepassword123",
      "age": 20,
      "gender": "male",
      "height": 5.7,
      "weight": 60
   }
   ```

**Response**:

```json
{
  "message": "SignUp Successfull"
}
```

   </details>

### User Login

   <details>
   <summary>Endpoint: `POST /api/v1/auth/sign-in`</summary>
      
   **Request**:
   ```json
   {
      "email": "abc@example.com",
      "password": "securepassword123"
   }
   ```

**Response**:

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

   </details>

### Get Fitness Advice

   <details>
   <summary>Endpoint: `POST /api/v1/getFitnessAdvice`</summary>
      
   **Request**:
   ```json
   {
      "email": "abc@example.com"
   }
   ```

**Request Headers**:

```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

**Response**:

```json
{
  "advice": "Based on your profile, we recommend a mix of cardio and strength training."
}
```

   </details>

### Get Nutrition Advice

   <details>
   <summary>Endpoint: `POST /api/v1/getNutritionAdvice`</summary>
      
   **Request**:
   ```json
   {
      "email": "abc@example.com"
   }
   ```

**Request Headers**:

```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

**Response**:

```json
{
  "advice": "We recommend a balanced diet with a focus on protein and healthy fats."
}
```

   </details>

These endpoints allow users to register, log in, and receive personalized fitness and nutrition advice.

## Using Postman for API Testing

You can use Postman to test the API endpoints provided by the fitness assistant application. Follow these steps to set up Postman for testing:

1.  **Install Postman**: Download and install Postman from the [official website](https://www.postman.com/downloads/).

2.  **Import the API Collection**:

    - Open Postman and click on the "Import" button.
    - Import the provided Postman collection file (`postman_collection.json`) from the project repository.

3.  **Set Up Environment Variables**:

    - In Postman, go to "Environments" and create a new environment.
    - Add the following variables to the environment:
      - `baseUrl`: `http://localhost:8080/api/v1`
      - `jwtToken`: Your JWT token obtained from the sign-in route.

4.  **Testing the Endpoints**:

    - Use the imported collection to test the various endpoints.
    - Ensure you have the `jwtToken` set in the environment for authenticated routes.

By using Postman, you can easily test and debug the API endpoints to ensure they are working as expected.

## ✨ Features

- **Framework**: Built using Node.js and TypeScript, ensuring a robust and scalable architecture.
- **User Authentication**: Secure user registration and login functionality.
- **Fitness Advice**: Personalized fitness recommendations based on user data.
- **Nutrition Advice**: Tailored nutrition guidance to help users meet their health goals.
- **API Integration**: Seamless integration with the Gemini API for enhanced functionality.
- **Daytona Compatibility**: Easily deployable and manageable within the Daytona environment.

List of sample features (e.g. realtime chat app, standardized development environment with devcontainers)
