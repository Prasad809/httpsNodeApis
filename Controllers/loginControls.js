const fs = require('fs').promises;
const path = require('path');
const usersDtl = require('../users/user.json')


const loginUser = async (req, res) => {

    try {
        const { userName, password, instituteId } = req.body;
        const userError = usersDtl?.users?.find(user => user.userName === userName);
        const passwordErr = usersDtl?.users?.find(user => user.password === password);
        const instituteIdErr = usersDtl?.users?.find(user => user.instituteId === instituteId);
        
        if (!userError || !passwordErr || !instituteIdErr) {
            return res.status(200).json({
                status: false,
                description: [{
                    message: "Invalide Credincials"
                }],
            });
        } else {
            let roleId = usersDtl?.users?.find(user => user.userName === userName)?.isAdmin;
            return res.status(200).json({
                status: true,
                message: "success",
                response: {
                    roleId: roleId === 'Y' ? '101' : '102',
                }
            });
        }
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            description: "Internal Server Error",
            status: false,
            message: "failure"
        });
    }
}


module.exports = { loginUser };

