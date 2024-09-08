"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Characters",
      [
        // Marvel Universe
        {
          userId: 1,
          universeId: 1,
          title: "Spider-Man",
          image:
            "https://i.pinimg.com/originals/2d/39/e9/2d39e91333c5ee2bcc1ce6269d3e66ea.jpg",
          info: "A young superhero with spider-like abilities, including web-shooting and wall-crawling.",
          rare: "Common",
          price: 100,
        },
        {
          userId: 9,
          universeId: 1,
          title: "Iron Man",
          image:
            "https://i.pinimg.com/736x/c0/38/c6/c038c6cf31352eb5982bd0981cb2756f.jpg",
          info: "A billionaire inventor in a high-tech suit of armor, known for his genius intellect and combat skills.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 4,
          universeId: 1,
          title: "Thor",
          image:
            "https://i.pinimg.com/originals/01/7f/51/017f51e3740f61ddcdbe12232e267567.jpg",
          info: "The Norse god of thunder with a magical hammer, wielding immense power and strength.",
          rare: "Rare",
          price: 250,
        },
        {
          userId: 4,
          universeId: 1,
          title: "Hulk",
          image: "https://main.red/m/P0dQpl2P/1080x1350.jpg",
          info: "A scientist who transforms into a giant green powerhouse when enraged.",
          rare: "Epic",
          price: 500,
        },
        {
          userId: 2,
          universeId: 1,
          title: "Black Widow",
          image:
            "https://i.pinimg.com/originals/be/bb/38/bebb388eed04a851ff9a6dc058802f3b.jpg",
          info: "A highly trained spy and assassin with exceptional combat skills.",
          rare: "Uncommon",
          price: 150,
        },
        {
          userId: 1,
          universeId: 1,
          title: "Captain America",
          image:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d2/CACW_Steve_Textless_Poster.jpg/revision/latest/scale-to-width-down/1200?cb=20180621224925&path-prefix=ru",
          info: "A super-soldier with a vibranium shield, known for his leadership and patriotism.",
          rare: "Rare",
          price: 200,
        },
        {
          userId: 9,
          universeId: 1,
          title: "Doctor Strange",
          image:
            "https://i.pinimg.com/736x/27/68/3b/27683b57edf02317c3c39d59cf58efd7.jpg",
          info: "A sorcerer supreme with mastery over mystical arts and dimensions.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 9,
          universeId: 1,
          title: "Black Panther",
          image:
            "https://avatars.mds.yandex.net/i?id=29208c17331f0473e3304accec8dea58_l-5243680-images-thumbs&n=13",
          info: "The king of Wakanda with superhuman agility and a suit made from vibranium.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 3,
          universeId: 1,
          title: "Scarlet Witch",
          image:
            "https://i.pinimg.com/originals/d2/19/ff/d219ffdd40ce1f97385780120aff3113.jpg",
          info: "A powerful mutant with reality-warping abilities and telekinesis.",
          rare: "Epic",
          price: 350,
        },
        {
          userId: 9,
          universeId: 1,
          title: "Ant-Man",
          image:
            "https://static.wikia.nocookie.net/disney/images/d/d7/ScottLangAnt-Man.jpg/revision/latest/scale-to-width-down/1200?cb=20150106190124",
          info: "A superhero who can shrink to the size of an ant or grow to giant proportions.",
          rare: "Uncommon",
          price: 180,
        },

        // DC Universe
        {
          userId: 2,
          universeId: 2,
          title: "Batman",
          image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ace83112348533.56266e8276f6b.jpg",
          info: "A vigilante with a vast array of gadgets and detective skills, known for his crusade against crime in Gotham City.",
          rare: "Epic",
          price: 500,
        },
        {
          userId: 1,
          universeId: 2,
          title: "Superman",
          image:
            "https://i.pinimg.com/originals/cf/a2/b8/cfa2b85f23bbfd918d73ff233cf59095.jpg",
          info: "An alien with superhuman strength, flight, and heat vision, considered Earth's greatest hero.",
          rare: "Legendary",
          price: 700,
        },
        {
          userId: 6,
          universeId: 2,
          title: "Wonder Woman",
          image: "https://oboi-download.ru/files/wallpapers/4316/178605.webp",
          info: "An Amazonian warrior with superhuman strength, agility, and combat skills.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 3,
          universeId: 2,
          title: "Flash",
          image:
            "https://cdna.artstation.com/p/assets/images/images/021/185/154/large/mizuri-official-cyberflash.jpg?1570708436",
          info: "The fastest man alive with the ability to run at incredible speeds and manipulate time.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 6,
          universeId: 2,
          title: "Aquaman",
          image:
            "https://images.wallpapersden.com/image/download/aquaman-2018-movie-12k-poster_a2hobGiUmZqaraWkpJRmamhrrWdlaW0.jpg",
          info: "The king of Atlantis with superhuman strength and the ability to communicate with marine life.",
          rare: "Rare",
          price: 250,
        },
        {
          userId: 8,
          universeId: 2,
          title: "Green Lantern",
          image:
            "https://i.pinimg.com/736x/7d/49/3e/7d493e48a3fa44c7bd82883f3c7586b0.jpg",
          info: "A member of the intergalactic Green Lantern Corps, wielding a power ring that can create constructs of willpower.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 4,
          universeId: 2,
          title: "Cyborg",
          image:
            "https://i.pinimg.com/736x/84/68/85/84688534ece25ebb75bea346ac03adc6.jpg",
          info: "A hero with advanced cybernetic enhancements and advanced weaponry integrated into his body.",
          rare: "Uncommon",
          price: 200,
        },
        {
          userId: 10,
          universeId: 2,
          title: "Shazam",
          image:
            "https://i.pinimg.com/originals/24/12/d8/2412d8ef14bb7a2d12d7ab984f51bac5.jpg",
          info: "A young hero with the power of the gods, capable of superhuman strength, speed, and magical abilities.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 9,
          universeId: 2,
          title: "Martian Manhunter",
          image:
            "https://static.wikia.nocookie.net/vsbattles/images/d/d1/Martian_Manhunter_%28CW%29.jpg/revision/latest/scale-to-width-down/1200?cb=20170226005753",
          info: "A Martian with telepathy, shapeshifting, and superhuman abilities, often seen as a member of the Justice League.",
          rare: "Epic",
          price: 350,
        },
        {
          userId: 3,
          universeId: 2,
          title: "Hawkman",
          image:
            "https://i.pinimg.com/originals/8c/89/78/8c897880c1fcf7ae524e848cbd3699d8.jpg",
          info: "A hero with the ability to fly using a winged harness and an expert in ancient weaponry.",
          rare: "Uncommon",
          price: 180,
        },

        // Miraculous Universe
        {
          userId: 1,
          universeId: 3,
          title: "Ladybug",
          image:
            "https://i.pinimg.com/originals/bc/60/9d/bc609db882de9e5229e2675ee6ac0928.png",
          info: "A teenage superhero with the ability to summon and control lucky charms, protecting Paris from supervillains.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 7,
          universeId: 3,
          title: "Cat Noir",
          image:
            "https://i.pinimg.com/736x/6d/05/8f/6d058f6b1f42d9ad73a469b1fa3fb760.jpg",
          info: "A superhero with cat-like agility and powers, fighting alongside Ladybug to save Paris.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 1,
          universeId: 3,
          title: "Miraculous Bee",
          image:
            "https://i.pinimg.com/originals/41/c5/e0/41c5e0e10589f164c3148cc2af8f23ff.jpg",
          info: "A superhero with the power to create energy blasts and control bees.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 9,
          universeId: 3,
          title: "Miraculous Turtle",
          image: "https://example.com/miraculousturtle.jpg",
          info: "A superhero with the power of invulnerability and the ability to create protective shields.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 4,
          universeId: 3,
          title: "Rena Rouge",
          image:
            "https://i.pinimg.com/originals/e0/7b/0a/e07b0ae81d19753b3f2ee1e7fdf6f645.png",
          info: "A superhero with the power to create illusions and control sound waves.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 4,
          universeId: 3,
          title: "Queen Bee",
          image:
            "https://i.pinimg.com/originals/41/c5/e0/41c5e0e10589f164c3148cc2af8f23ff.jpg",
          info: "A superhero with the ability to command bees and emit powerful energy blasts.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 7,
          universeId: 3,
          title: "Viperion",
          image:
            "https://vignette.wikia.nocookie.net/vsbattles/images/0/06/ViperionRender.png/revision/latest?cb=20191231051051",
          info: "A superhero with the power to manipulate time and use serpent-themed abilities.",
          rare: "Epic",
          price: 350,
        },
        {
          userId: 9,
          universeId: 3,
          title: "Carapace",
          image:
            "https://static.wikia.nocookie.net/p__/images/3/32/Carapace_Render.png/revision/latest?cb=20210817011058&path-prefix=protagonist",
          info: "A superhero with enhanced strength and a protective shell, able to defend allies and himself.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 2,
          universeId: 3,
          title: "Bunnyx",
          image:
            "https://static.wikia.nocookie.net/p__/images/a/ae/Younger_Bunnyx.png/revision/latest?cb=20231229201436&path-prefix=protagonist",
          info: "A superhero with the power to travel through time and alter events to ensure a better outcome.",
          rare: "Legendary",
          price: 500,
        },
        {
          userId: 5,
          universeId: 3,
          title: "Luka",
          image:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee014a22-f0bb-41a4-bfd9-e34658e25061/dea4tue-7cb294c2-7ef4-4bee-a8e6-df5c3d719d67.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlMDE0YTIyLWYwYmItNDFhNC1iZmQ5LWUzNDY1OGUyNTA2MVwvZGVhNHR1ZS03Y2IyOTRjMi03ZWY0LTRiZWUtYThlNi1kZjVjM2Q3MTlkNjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Tm3EF_qauFbzkvvhIYkdYMjEoSg5A4MGtk68gTj4XnE",
          info: "A superhero with musical abilities that can create powerful soundwaves and resonate with emotions.",
          rare: "Uncommon",
          price: 200,
        },

        // Star Wars Universe
        {
          userId: 5,
          universeId: 4,
          title: "Luke Skywalker",
          image:
            "https://static.wikia.nocookie.net/charactercommunity/images/8/84/Lukeskywalker.jpg/revision/latest?cb=20210824155448",
          info: "A Jedi Knight with exceptional Force abilities and lightsaber skills, pivotal in the fight against the Empire.",
          rare: "Legendary",
          price: 600,
        },
        {
          userId: 1,
          universeId: 4,
          title: "Darth Vader",
          image:
            "https://i.pinimg.com/736x/6a/8f/e8/6a8fe8d3260ef040aaf30a2925db85f5.jpg",
          info: "A Sith Lord with immense power and a mastery of the Dark Side of the Force, known for his imposing presence.",
          rare: "Legendary",
          price: 650,
        },
        {
          userId: 6,
          universeId: 4,
          title: "Princess Leia",
          image:
            "https://static.wikia.nocookie.net/fictupedia/images/1/1d/Leia-princess-leia-organa-solo-skywalker-9301321-576-1010.jpg/revision/latest?cb=20170120065805",
          info: "A leader of the Rebel Alliance with strong leadership skills and combat abilities.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 5,
          universeId: 4,
          title: "Han Solo",
          image:
            "https://static.wikia.nocookie.net/hero-and-villains/images/e/e5/A1e2b44a1e0a83138348f27f8d5d4029.jpg/revision/latest?cb=20191127181207",
          info: "A skilled pilot and smuggler with a quick wit and exceptional marksmanship.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 5,
          universeId: 4,
          title: "Yoda",
          image:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/678f8dce-2e4b-4959-af11-143c4d1b7c02/dg99yzq-753f02f9-a175-4ce5-8538-d5ae88d2130f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3OGY4ZGNlLTJlNGItNDk1OS1hZjExLTE0M2M0ZDFiN2MwMlwvZGc5OXl6cS03NTNmMDJmOS1hMTc1LTRjZTUtODUzOC1kNWFlODhkMjEzMGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HPLGtfvVmlsiGXd1cCTENAPlUbqj9tXJTOawrjWnMmY",
          info: "A wise and powerful Jedi Master with profound knowledge of the Force and combat skills.",
          rare: "Legendary",
          price: 700,
        },
        {
          userId: 8,
          universeId: 4,
          title: "Obi-Wan Kenobi",
          image:
            "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/14/159258.jpg",
          info: "A seasoned Jedi Master known for his mentorship and prowess in lightsaber combat.",
          rare: "Epic",
          price: 450,
        },
        {
          userId: 8,
          universeId: 4,
          title: "Chewbacca",
          image:
            "https://c4.wallpaperflare.com/wallpaper/541/973/261/star-wars-chewbacca-wookiee-video-games-star-wars-hd-art-wallpaper-preview.jpg",
          info: "A Wookiee warrior with great strength and loyalty, known for his impressive combat skills.",
          rare: "Rare",
          price: 250,
        },
        {
          userId: 6,
          universeId: 4,
          title: "Boba Fett",
          image:
            "https://4kwallpapers.com/images/wallpapers/the-book-of-boba-fett-the-mandalorian-2022-series-star-wars-1290x2796-8792.jpg",
          info: "A feared bounty hunter with advanced armor and weaponry, renowned for his tracking abilities.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 7,
          universeId: 4,
          title: "R2-D2",
          image:
            "https://static.wikia.nocookie.net/swfanon/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20200610083005&path-prefix=ru",
          info: "A resourceful astromech droid with various built-in tools and a key role in many adventures.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 2,
          universeId: 4,
          title: "C-3PO",
          image:
            "https://w0.peakpx.com/wallpaper/761/278/HD-wallpaper-c-3po-star-wars-c3po.jpg",
          info: "A protocol droid known for his fluency in multiple languages and his role as a translator.",
          rare: "Uncommon",
          price: 200,
        },

        // Harry Potter Universe
        {
          userId: 7,
          universeId: 5,
          title: "Harry Potter",
          image:
            "https://static.wikia.nocookie.net/p__/images/0/01/Harry-Potter-Sword.png/revision/latest?cb=20190510175138&path-prefix=protagonist",
          info: "A young wizard with a lightning-shaped scar and a key role in the fight against the dark wizard Voldemort.",
          rare: "Legendary",
          price: 600,
        },
        {
          userId: 8,
          universeId: 5,
          title: "Hermione Granger",
          image:
            "https://preview.redd.it/my-attempt-at-hermione-granger-v0-cutvbwot2pbb1.png?width=512&format=png&auto=webp&s=ebe3e8929d00d79d33a1d19a08066e34d43b3edd",
          info: "A brilliant witch with exceptional magical abilities and knowledge, known for her intellect and bravery.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 9,
          universeId: 5,
          title: "Ron Weasley",
          image:
            "https://static.wikia.nocookie.net/heroes-v-villains/images/5/56/Ron_Weasley_%28Scopatore%29.jpg/revision/latest?cb=20181004180359",
          info: "A loyal friend and skilled wizard, known for his humor and courage in the face of danger.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 6,
          universeId: 5,
          title: "Albus Dumbledore",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIHBT8BqAlQLixDbKJSqk0dGvltGJ9RAFfw&s",
          info: "The wise and powerful headmaster of Hogwarts, known for his deep knowledge of magic and leadership.",
          rare: "Legendary",
          price: 650,
        },
        {
          userId: 3,
          universeId: 5,
          title: "Severus Snape",
          image:
            "https://static.wikia.nocookie.net/galaxystarsupermiraclenight/images/9/92/SeverusSnape.jpg/revision/latest?cb=20200410182507",
          info: "A complex figure with expertise in potions and dark magic, whose true loyalties are revealed over time.",
          rare: "Epic",
          price: 400,
        },
        {
          userId: 6,
          universeId: 5,
          title: "Sirius Black",
          image: "https://quoters.info/files/portraits/sirius-blek.jpg",
          info: "A brave wizard and Harry's godfather, known for his rebellious spirit and loyalty.",
          rare: "Rare",
          price: 350,
        },
        {
          userId: 7,
          universeId: 5,
          title: "Rubeus Hagrid",
          image:
            "https://static.wikia.nocookie.net/harrypotter/images/3/32/Rubeus.jpg/revision/latest?cb=20080207002912&path-prefix=ru",
          info: "The Keeper of Keys and Grounds at Hogwarts, known for his love of magical creatures and his kind heart.",
          rare: "Uncommon",
          price: 200,
        },
        {
          userId: 3,
          universeId: 5,
          title: "Draco Malfoy",
          image: "https://storage.googleapis.com/pod_public/750/114410.jpg",
          info: "A student from Slytherin House with a complex relationship with Harry Potter and a strong ambition.",
          rare: "Rare",
          price: 300,
        },
        {
          userId: 10,
          universeId: 5,
          title: "Luna Lovegood",
          image:
            "https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
          info: "A quirky and insightful witch with a unique perspective on the magical world and a loyal friend.",
          rare: "Uncommon",
          price: 250,
        },
        {
          userId: 2,
          universeId: 5,
          title: "Neville Longbottom",
          image:
            "https://static.wikia.nocookie.net/ashes_of_chaos/images/6/66/Nevillelongbottom.jpg/revision/latest?cb=20200730201859",
          info: "A brave and resilient wizard who grows into a key figure in the fight against Voldemort.",
          rare: "Rare",
          price: 300,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Characters", null, {});
  },
};
