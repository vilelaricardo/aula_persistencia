const userModel = require('../models/userModel');

const createUser = async (userData) => {
   const user = new userModel(userData);
   await user.save();
   return user;
};

const getUserByEmail = async (email) => {
   return await userModel.findOne({ email });
};

module.exports = {
    createUser,
    getUserByEmail
};
