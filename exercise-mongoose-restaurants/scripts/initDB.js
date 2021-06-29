require('../configs/database');

const RestaurantsModel = require('../models/Restaurantes');
const restaurants = require('../collections/r.json');

const populateSongCollection = async () => {
  await RestaurantsModel.deleteMany({});
  console.info('> collection clean! 🗑️');

  await RestaurantsModel.insertMany(restaurants);
  console.info('> Restaurants added! 🔥');
};

const main = async () => {
  await populateSongCollection();
  process.exit(0);
};

main();