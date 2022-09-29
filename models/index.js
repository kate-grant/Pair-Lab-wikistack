const { Sequelize, DataTypes } = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("open", "closed"),
    allowNull: false,
  },
});

const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { db, Page, User };
