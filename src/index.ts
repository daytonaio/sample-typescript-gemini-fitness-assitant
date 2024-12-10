import express from 'express'
import { configDotenv } from 'dotenv';
import authRoutes from './routes/auth.routes'
import fitnessRoutes from './routes/fitness.routes'
configDotenv();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use ('/api/v1/auth/', authRoutes);
app.use ('/api/v1/', fitnessRoutes);

app.listen (port, ()=>{
    console.log(`server is running on: http://localhost:${port}`);
})
