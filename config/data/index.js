const conf = require('../default');
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var profiles = require('./profiles');
var users = require('./users');
var apartments = require('./apartments');
var locations = require('./locations');
var countries = require('./countries');

convertObjectIds = (model => {
  model.map(item => {
    console.log(item._id+" "+ObjectID.isValid(item._id))
    //item._id = new ObjectID(item._id);
  })
  return model;
});

mongoClient
  .connect(conf.mongodb)
  .then(db => {
    return db.dropDatabase()
      .then(() => {
        return db.collection('profiles').insertMany(profiles);
      })
      .then(() => {
        return db.collection('users').insertMany(convertObjectIds(users));
      })
      .then(() => {
        return db.collection('apartments').insertMany(convertObjectIds(apartments));
      })
      .then(() => {
        return db.collection('locations').insertMany(convertObjectIds(locations));
      })
      .then(() => {
        return db.collection('countries').insertMany(convertObjectIds(countries));
      })
      .then(() => {
        return db.close();
      });
  })
  .catch(err => {
    console.log(err);
  });
