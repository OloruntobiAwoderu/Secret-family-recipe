const express = require("express");
const app = express()
const port = process.env.PORT || 3000
const userRouter = require("./api/useRoutes")
const authroutes = require("./api/authRoutes")


app.use(express.json())
app.use('/', userRouter)
app.use('/register', authroutes)







app.listen(port, () => console.log("server listening on port "))