const response=require('../GraphData/basic.json');
const instituteRes=require('../GraphData/projectData');

const serverControl=async(req,res)=>{
    try {
        return res.status(200).json({
            status: true,
            message: "success",
            response:{
                stateRes:response,
                location:instituteRes?.locations
            }
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: "failure",
        });
    }
};

module.exports={serverControl}