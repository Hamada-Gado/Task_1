// #Task route solution
const userModel = require("../Models/User.js");
const { default: mongoose } = require("mongoose");

const createUser = async (req, res) => {
  //add a new user to the database with
  //Name, Email and Age
  const { Name, Email, Age } = req.body;
  try {
    const user = new userModel({ Name, Email, Age });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUsers = async (req, res) => {
  //retrieve all users from the database
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  //update a user in the database
  const { Email, Age } = req.body;
  console.log(Email);
  try {
    const user = await userModel.findOneAndUpdate(
      { Email },
      { Age },
      { new: true },
    );
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  //delete a user from the database
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
