const express = require("express");
const app = express()
const userRouter = require("./api/useRoutes")
const authroutes = require("./api/authRoutes")


app.use(express.json())
app.use('/', userRouter)
app.use('/register', authroutes)







app.listen(3000, () => console.log("server listening on port 3000"))