const { User } = require("../models");

const userData = [
  {
    username: " John",
    email: "john@gmail.com",
    password: "password123",
  },
  {
    username: "Tim",
    email: "tim@gmail.com",
    password: "password123",
  },
  {
    username: "Austin",
    email: "austin@gmail.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
