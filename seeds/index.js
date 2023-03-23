const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const seedUsers = require("./users-seed");
const seedPosts = require(".post-seed");
const seedComments = require("./comments-seed");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(seedPosts, {
    individualHooks: true,
    returning: true,
  });

  const comment = await Comment.bulkCreate(seedComments, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

// const seedUsers = require("./users-seed");
// const seedPosts = require("./post-seed");
// const seedComments = require("./comments-seed");

// const sequelize = require("../config/connection");

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log("\n----- DATABASE SYNCED -----\n");
//   await seedUsers();
//   console.log("\n----- USERS SEEDED -----\n");

//   await seedPosts();
//   console.log("\n----- POSTS SEEDED -----\n");

//   await seedComments();
//   console.log("\n----- COMMENTS SEEDED -----\n");

//   process.exit(0);
// };

// seedAll();
