const { Universe } = require("../db/models");

class UniverseServices {
  // CREATE
  static createUniverse = async ({ title, description }) => {
    try {
      let universe = await this.getUniverseByTitle(title);

      if (universe) {
        return "Такая вселенная уже существует.";
      }

      universe = await Universe.create({ title, description });

      return universe.get();
    } catch ({ message }) {
      console.log(message);
    }
  };

  // READ
  static getAllUniverses = async () =>
    (await Universe.findAll()).map((universe) => universe.get());

  static async getUniverseByTitle(title) {
    try {
      const universe = await Universe.findOne({ where: { title } });
      return universe ? universe.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getUniverseById(id) {
    try {
      const universe = await Universe.findOne({ where: { id } });
      return universe ? universe.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  }

  // UPDATE
  static updateUniverseByTitle = async ({
    title, // Текущий title (обязательный параметр)
    newTitle = null, // Новый title (необязательный параметр)
    newDescription = null, // Новый description (необязательный параметр)
  }) => {
    try {
      let universe = await this.getUniverseByTitle(title);
      if (!universe) {
        return "Данной вселенной еще не существует.";
      }

      if (newDescription) {
        universe = await Universe.update(
          {
            description: newDescription,
          },
          { where: { title } }
        );
      }

      if (newTitle) {
        universe = await Universe.update(
          {
            title: newTitle,
          },
          { where: { title } }
        );
      }

      universe = await this.getUniverseByTitle(newTitle ? newTitle : title);
      return universe;
    } catch ({ message }) {
      console.log(message);
    }
  };

  // DELETE
  static deleteAllUniverse = async () => await Universe.destroy({ where: {} });

  static async deleteUniverse(id) {
    try {
      const universe = await Universe.destroy({ where: { id } });
      return universe;
    } catch ({ message }) {
      console.log(message);
    }
  }
}

module.exports = UniverseServices;
