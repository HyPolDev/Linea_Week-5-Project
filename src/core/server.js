import { dbConnection } from "../database/db.js";
import express from "express"
import router from './router.js'
import cors from 'cors'
import 'dotenv/config'


const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4001;

app.get('/healthy', (req, res) => {
    res.status(200).json(
        {
            success: true,
            message: "server is healthy"
        }
    )
})

app.use(router)

dbConnection()
    .then(() => {
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running o port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })



