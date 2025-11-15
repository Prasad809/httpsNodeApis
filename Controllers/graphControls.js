const fs = require('fs').promises;
const path = require('path');
const graphData=path.resolve('GraphData','graphData.json')
const dataPath = path.resolve('GraphData', 'roadMap.json');
const codePath = path.resolve('GraphData', 'codeData.json');

const dashBoard=async(req,res)=>{
    try{
         const file = await fs.readFile(graphData, 'utf8');
        const data = JSON.parse(file);

         return res.status(200).json({
            status: true,
            message: "success",
            response:data
        });
    }catch(error){
         return res.status(500).json({
            description: "Internal Server Error",
            status: false,
            message: "failure"
        });
    }
}
const getTopicsJson = async (req, res) => {
    try {
        const file = await fs.readFile(dataPath, 'utf8');
        const data = JSON.parse(file);

        if (!data) {
            return res.status(404).json({ message: "Topics are not founded.", status: false });
        }

        res.status(200).json({ response: data, status: true,message: "success" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error.",message: "failure" });
    }
};
const getCodeJson = async (req, res) => {
    try {
        const file = await fs.readFile(codePath, 'utf8');
        const data = JSON.parse(file);

        if (!data) {
            return res.status(404).json({ message: "Codes are not founded.", status: false });
        }

        res.status(200).json({ response: data, status: true,message: "success" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error.",message: "failure" });
    }
};


module.exports={ dashBoard,getTopicsJson,getCodeJson }