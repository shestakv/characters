"use strict";
const { Model } = require("sequelize");
const universe = require("./universe");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate({ User, Universe }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.belongsTo(Universe, { foreignKey: "universeId" });
    }
  }
  Character.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Users",
        },
      },
      universeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "Universes",
        },
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      info: {
        type: DataTypes.TEXT,
      },
      rare: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Character",
    }
  );
  return Character;
};
