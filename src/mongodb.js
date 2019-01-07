const MongoClient = require('mongodb').MongoClient;
const Logger = require('mongodb').Logger


module.exports = function () {
  const app = this;
  const config = process.env['MONGO_URL'] || app.get('mongodb');
  const promise = MongoClient.connect(config);

  //Logger.setLevel('debug');
  //Logger.filter('class', ['Server']);

  app.set('mongoClient', promise);
};
