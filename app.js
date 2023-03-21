import express from "express";

import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'

import dotenv from 'dotenv'

const app = express()
dotenv.config()


app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
app.use(cors())

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to MEMORIES-APP API !!!')
})

const CONNECTION_URL = 'mongodb+srv://zagadat:abcd1234@cluster0.y7nxklk.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((e) => console.log(e.message));





