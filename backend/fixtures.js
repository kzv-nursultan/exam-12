const mongoose = require("mongoose");
const config = require("./config");
const Users = require("./models/Users");
const Pictures = require("./models/Pictures");
const {nanoid} = require("nanoid");

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();
  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [user, admin] = await Users.create({
    email: 'user@mail.com',
    password: '123',
    token: nanoid(),
    role: 'user',
    username: 'user',
    avatar: null
  }, {
    email: 'admin@mail.ru',
    password: '123',
    token: nanoid(),
    role: 'admin',
    username: 'admin',
  });

  await Pictures.create({
    author: user,
    image: '/fixtures/cubalibre.jpeg',
    name: 'Cuba Libre',
  }, {
    author: user,
    image: '/fixtures/cash.jpg',
    name: 'Johny Cash',
  }, {
    author: admin,
    image: '/fixtures/martini.jpeg',
    name: 'Martini',
  }, {
    author: admin,
    image: '/fixtures/pinacolada.jpg',
    name: 'Pina Colada',
  })

  await mongoose.connection.close();
};

run().catch(e => console.error(e));