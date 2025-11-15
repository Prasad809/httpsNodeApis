const response=require('../GraphData/basic.json')

const serverControl=async(req,res)=>{
    try {
        return res.status(200).json({
            status: true,
            message: "success",
            response:response
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: "failure",
        });
    }
}

module.exports={serverControl}