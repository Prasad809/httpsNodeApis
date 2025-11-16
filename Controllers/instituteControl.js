const fs = require('fs').promises;
const path = require('path');
const instituteDtls=path.resolve('GraphData','projectData.json')

const instuTypes=async(req,res)=>{
    try{
         const file = await fs.readFile(instituteDtls, 'utf8');
        const data = JSON.parse(file);

         return res.status(200).json({
            status: true,
            message: "success",
            response:data?.instType
        });
    }catch(error){
         return res.status(500).json({
            description: "Internal Server Error",
            status: false,
            message: "failure"
        });
    }
}
const instuCatogery=async(req,res)=>{
    try{
        const { instType } = req.body;
         const file = await fs.readFile(instituteDtls, 'utf8');
        const data = JSON.parse(file);
        let result=null;
        if(instType === 'SOFT'){
            result = Object.keys(data?.Software);
        }else if(instType === 'GOVT'){
            result = Object.keys(data?.Government);
        }else if(instType === 'NETW'){
            result = Object.keys(data?.Networking);
        }else if(instType === 'CHEM'){
            result = Object.keys(data?.Chemical);
        }
         return res.status(200).json({
            status: true,
            message: "success",
            response:result
        });
    }catch(error){
         return res.status(500).json({
            description: "Internal Server Error",
            status: false,
            message: "failure"
        });
    }
}

module.exports={ instuTypes , instuCatogery}