const { User } = require("../db/models");

class UserServices {
  static async addUser({ name, email, password } = {}) {
    try {
      await User.create({ name, email, password });
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getAllUsers() {
    try {
      const allUsers = (await User.findAll()).map((el) => el.get());
      return allUsers;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getUsersByName(name) {
    try {
      const user = (await User.findOne({ where: { name } })).get();
      return user;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findOne({ where: { id } });
      return user ? user.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getUsersByEmail(email) {
    try {
      const user = (await User.findOne({ where: { email } })).get();
      return user;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async updateUser({ name, email }) {
    try {
      const user = await User.update({ name }, { where: { email } });
      console.log(`Пользователь ${email} успешно изменил свое имя!`);
      return user;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async deleteUser(id) {
    try {
      const arr = await User.destroy({ where: { id } });
      return arr;
    } catch ({ message }) {
      console.log(message);
    }
  }
}

module.exports = UserServices;
