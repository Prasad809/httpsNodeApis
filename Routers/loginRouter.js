const express=require('express')
const Routers=express.Router()
const loginRouter=require('../Controllers/loginControls')
Routers.post('/userLogin',loginRouter.loginUser)

module.exports=Routers;