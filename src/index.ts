import express from 'express'
import { configDotenv } from 'dotenv';
configDotenv();

const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello from the daytona server');
})

app.listen (port, ()=>{
    console.log(`server is running on: http://localhost:${port}`);
})