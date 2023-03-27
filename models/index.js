const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comments");

//User can has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//Post belongs to a user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//Post has many transactions
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  hooks: true,
});

//Comments belong to a post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
  hooks: true,
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: " cascade",
  hooks: true,
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: " cascade",
  hooks: true,
});

module.exports = { User, Post, Comment };
