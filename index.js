require('dotenv').config();
const express=require('express');
const https=require('https');
const path=require('path');
const fs=require('fs')
const cors=require('cors');
const bodyParser=require('body-parser')
const graphEndPoint=require('./Routers/graphRouter')
const cmgpd=require('./Controllers/serverControl')

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/graph',graphEndPoint)
const PORT=process.env.PORT;

app.use(cors({
    origin:"*",
    methods:["POST","GET"],
    optionsSuccessStatus:200
}))

app.use('/home',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})


app.use('/cmgpd',cmgpd.serverControl);

const sslOptions={
    key:fs.readFileSync(path.join(__dirname,'CERTSSL','key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'CERTSSL','crt.pem'))
}

https.createServer(sslOptions,app).listen(PORT,(error)=>{
    if(error) return error;
    console.log(`Server Running At ${PORT}...!`);
});