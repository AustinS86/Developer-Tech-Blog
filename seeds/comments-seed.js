const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I love coding. It's challenging and rewarding!",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text: "Handlebars make coding easier.",
    post_id: 1,
    user_id: 2,
  },
  {
    comment_text:
      "Javascript is easier to understand once you get the syntax down",
    post_id: 2,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
