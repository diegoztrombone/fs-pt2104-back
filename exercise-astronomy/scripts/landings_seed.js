require('../config/db');

const LandingModel = require('../models/Landings_new')
const landing = require('../seeds/landings.json');

const populateSongCollection = async () => {
  await LandingModel.deleteMany({});
  console.info('> collection clean! 🗑️');

  await LandingModel.insertMany(landing);
  console.info('> Songs added! 🔥');
};

const main = async () => {
  await populateSongCollection();
  process.exit(0);
};

main();
