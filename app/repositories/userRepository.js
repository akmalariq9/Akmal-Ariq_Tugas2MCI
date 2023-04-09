const {user} = require('../models')

const getAllUser = () => {
    return user.findAll()
}

const getUserByName = (name) => {
    return user.findOne(
        {
            where: {
                name: name
            }
        }
    )
}

const createUser = (data) => {
    return user.create(data)
}

const updateUser = (data, username) => {
    return user.update(data, {
        where: {
            username: username
        }
    });
}

const deleteUser = (username) => {
    return user.destroy({
        where: {
            username: username
        }
    })
}

module.exports = {
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}