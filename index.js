import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import cors from 'cors'
import { connectDB } from './db/db.js'
import router from './routes/index.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
