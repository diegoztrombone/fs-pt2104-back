require('../config/db');

const NeasModel = require('../models/NEAS')
const neas = require('../seeds/neas.json')

const populateSongCollection = async () => {
  await NeasModel.deleteMany({});
  console.info('> collection clean! 🗑️');

  await NeasModel.insertMany(neas);
  console.info('> Songs added! 🔥');
};

const main = async () => {
  await populateSongCollection();
  process.exit(0);
};

main();
