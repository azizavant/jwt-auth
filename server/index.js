require('dotenv').config()
const express = require("express")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)


app.get('/', (req, res) => {
    res.json('Hello World!')
})

const start = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})
    }
    catch (e) {
        console.log(e);
    }
}
start()
