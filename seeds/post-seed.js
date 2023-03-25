const { Post } = require("../models");

const postData = [
  {
    title: "Rainy Day",
    post_text: "Why does it have to rain everyday.",
    user_id: 1,
  },
  {
    title: "Solar Panels",
    post_text: "Saving energy one day at a time.",
    user_id: 2,
  },
  {
    title: "Beautiful day",
    post_text: "Its a nice warm day!",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
