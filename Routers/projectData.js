const express=require('express')
const Routers=express.Router()
const instRouter=require('../Controllers/instituteControl')
Routers.get('/location',instRouter.instuLocation);
Routers.get('/types',instRouter.instuTypes);
Routers.post('/catogeries',instRouter.instuCatogery);

module.exports=Routers;