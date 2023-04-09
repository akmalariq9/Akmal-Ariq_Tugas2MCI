const user = require('../models/user');
const userRepository = require('../repositories/userRepository')

const getAllUser = async () => {
    try{
        const users = await userRepository.getAllUser();
        return users;
    }
    catch(err){
        return err;
    }
}

const getUserByName = async (name) => {
    try{
        const user = await userRepository.getUserByName(name);
        return user;
    }
    catch(err){
        return err;
    }
}

const createUser = async (data) => {
    try{
        const user = await userRepository.createUser(data);
        return user;
    }
    catch(err){
        return err
    }
}

const updateUser = async (data, username) => {
    try{
        const user = userRepository.updateUser(data, username);
        return user;
    }
    catch(err){
        throw err;
    }
}

const deleteUser = async (username) => {
    try{
        const user = userRepository.deleteUser(username);
        return user;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}