"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Universes",
      [
        {
          title: "Marvel Universe",
          description:
            "A vast universe featuring iconic superheroes such as Spider-Man, Iron Man, and the Avengers, with a rich history of intergalactic battles and superpowered beings.",
        },
        {
          title: "DC Universe",
          description:
            "The universe where Batman, Superman, and Wonder Woman reside, known for its complex mythology and epic confrontations between heroes and villains.",
        },
        {
          title: "Miraculous Universe",
          description:
            "A magical universe centered around teenage heroes Marinette Dupain-Cheng and Adrien Agreste, who transform into Ladybug and Cat Noir to protect Paris from supervillains.",
        },
        {
          title: "Star Wars Universe",
          description:
            "An expansive galaxy filled with Jedi, Sith, and other mystical beings, where the struggle between the Light and Dark sides of the Force shapes the fate of countless worlds.",
        },
        {
          title: "Harry Potter Universe",
          description:
            "A magical world where wizards and witches, including Harry Potter and his friends, battle dark forces and explore mystical creatures in the fight against the dark wizard Voldemort.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Universes", null, {});
  },
};
