let users = require("../models/userModel");
const {v4: uuidv4 } = require("uuid");

//get users
const getAllUsers = (req, res) => {
    res.status(200).json({users});
};

//create users
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(200).json(users);
};

//update users
const updateUser = (req, res) => {
    const userId = req.params.id;
    const {username, email} = req.body;
    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    });
    res.status(201).json(users);
};

//delete users
const deleteUser = (req, res) => {
    const userId = req.params.id;
    const filteredUsers = users.filter((user) => user.id !== userId)
    res.status(201).json(filteredUsers);
};


module.exports = { getAllUsers, createUser, updateUser, deleteUser };
