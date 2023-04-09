const user = require('../models/user');
//const { use } = require('../routes/userRoute');
const userService = require('../services/userService');

const getAllUser = async (req, res) => {
    userService.getAllUser()
    .then(users => {
        if(!users){
            res.status(200).send({
                status : error,
                message : 'User data not found :(',
                data : users
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'User data found :D',
                data : users
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            status : 'Error!',
            message : err.message,
            data : {}
        });
    })
}

const getUserByName = async (req, res) => {
    userService.getUserByName(req.params.name)
    .then(users => {
        if(!users){
            res.status(404).send({
                status : 'error',
                message : 'User data not found :(',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'Success',
                message : 'User data found :D',
                data : users
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'Error!',
            message : err.message,
            data : {}
        });
    })
}

const createUser = async(req, res) => {
    const data = {
        username : req.body.username,
        name : req.body.name,
        email : req.body.email,
        phone_number : req.body.phone_number
    }
    userService.createUser(data)
    .then(user => {
        res.status(200).send({
            status : 'Success',
            message : 'User data successfully added! :D',
            data : user
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'Error',
            message : err.message,
            data : {}
        });
    })
}

const updateUser = (req, res) => {
    const data = req.body;
    const username = req.params.username;
    userService.updateUser(data, username)
    .then(user => {
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Update User',
                data: user
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success Update User',
            data: user
        });
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: err
        })
    });
}

const deleteUser = (req, res) => {
    const username = req.params.username;
    userService.deleteUser(username)
    .then(user => {
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'Failed to Delete User',
                data: user
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Success to Delete User',
            data: user
        });
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            data: err
        });
    })
}

module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}