const MyModel = require("../models/student");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

async function insert(req , res) {
    try {
        const crypt = await bcrypt.hash(req.body.password , 10)
        const obj = {
            name: req.body.name,
            email: req.body.email,
            password: crypt
        }
        const content = await MyModel.create(obj);
        res.status(200).json({
            status : "success",
            message : "Data inserted successfully"
        });
    } catch (error) {
        res.status(400).json({
            status : "fail",
            message : "Data inserted fail"
        });
    }
}
async function handleLogin(req, res) {
    const data = await MyModel.findOne({ email: req.body.email });
    
    if (data == null) {
        res.status(404).json({
            status: "fail",
            message: "User not found"
        })
    }
    else{
        const valid = await bcrypt.compare(req.body.password, data.password);

        if (valid == true) {
            const token = jwt.sign({ id: data._id }, "ABC", { expiresIn: '1h' });
            res.status(200).json({
                status: "success",
                message: "Login successfully",
                data,
                token
            })
        } else {
            res.status(200).json({
                status: "fail",
                message: "Login fail",
            })
        }
    } 
}

async function handleVerify(req , res) {
    try {
        var token = jwt.verify(req.body.token, "ABC");
        res.status(200).json({
            status: "success",
            message: "Token verified successfully",
            token
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Token not verified",
            error
        })
    }
}

async function getAll(req , res) {
    try {
        const content = await MyModel.find();
        res.status(200).json({
            status : "success",
            message : "Data inserted successfully",
            content
        });
    } catch (error) {
        res.status(400).json({
            status : "fail",
            message : "Data inserted fail"
        });
    }
}

async function deleteData(req , res) {
    try {
        await MyModel.findByIdAndDelete(req.params.id);
       res.status(200).json({
           status : "success",
           message : "Data inserted successfully",
       });
   } catch (error) {
       res.status(400).json({
           status : "fail",
           message : "Data inserted fail"
       });
   }
}

async function updateData(req , res) {
    try {
        await MyModel.findByIdAndUpdate(req.params.id , req.body);
       res.status(200).json({
           status : "success",
           message : "Data inserted successfully",
       });
   } catch (error) {
       res.status(400).json({
           status : "fail",
           message : "Data inserted fail"
       });
   }
}

async function getDataById(req , res) {
    try {
        const content = await MyModel.findById(req.params.id);
        res.status(200).json({
            status : "success",
            message : "Data inserted successfully",
            content
        });
    } catch (error) {
        res.status(400).json({
            status : "fail",
            message : "Data inserted fail"
        });
    }
}
module.exports = {
    insert,
    getAll,
    deleteData,
    updateData,
    getDataById,
    handleLogin,
    handleVerify
}