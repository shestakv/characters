const { Character } = require("../db/models/index.js");
const UserServices = require("./UserServices.js");
class CharactersService {
  static async addCard({
    userId,
    universeId,
    title,
    image,
    info,
    rare,
    price,
  } = {}) {
    try {
      await Character.create({
        userId,
        universeId,
        title,
        image,
        info,
        rare,
        price,
      });
      console.log(`Карточка ${title} успешно создана!`);
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getAllCards() {
    try {
      const cards = (await Character.findAll()).map((character) =>
        character.get()
      );
      return cards;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getCardById(id) {
    try {
      const card = await Character.findOne({ where: { id } });
      return card ? card.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getCardByTitle(title) {
    try {
      const card = await Character.findOne({ where: { title } });
      return card ? card.get() : null;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async getCardsByUserName(name) {
    try {
      const { id: user_id } = await UserServices.getUsersByName(name);
      const userCards = (await Character.findAll({ where: { user_id } })).map(
        (el) => el.get()
      );
      return userCards;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async updateCard({ rare, name }) {
    try {
      const user = await Character.update({ rare }, { where: { name } });
      console.log(`Карточка персонажа ${name} успешно изменила свою редкость`);
      return user;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async deleteCardsWithUser(user_id) {
    try {
      const allCards = await Character.destroy({ where: { user_id } });
      return allCards;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async deleteCardsWithUniverse(universe_id) {
    try {
      const allCards = await Character.destroy({ where: { universe_id } });
      return allCards;
    } catch ({ message }) {
      console.log(message);
    }
  }

  static async deleteCard(id) {
    try {
      const card = await Character.destroy({ where: { id } });
      return card;
    } catch ({ message }) {
      console.log(message);
    }
  }
}

module.exports = CharactersService;
