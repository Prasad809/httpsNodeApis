const express=require('express')
const Routers=express.Router()
const graphRouter=require('../Controllers/graphControls')
Routers.get('/dashboard',graphRouter.dashBoard)
Routers.get('/topics',graphRouter.getTopicsJson)
Routers.get('/codes',graphRouter.getCodeJson)

module.exports=Routers;