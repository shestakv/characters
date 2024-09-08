"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Universe extends Model {
    static associate({ Character }) {
      this.hasMany(Character, { foreignKey: "universeId" });
    }
  }
  Universe.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Universe",
    }
  );
  return Universe;
};
