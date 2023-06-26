require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./api/users/user.router')

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.listen(process.env.PORT || 5000, () =>
{
    console.log(`Server is up and running on ${process.env.PORT}` )
})