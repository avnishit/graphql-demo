const ObjectID = require('mongodb').ObjectID;
module.exports = function (context) {
    const { query = {} } = context.params;
    const isValid = ObjectID.isValid(query._id);
    if (query._id) console.log(query._id+" validity "+isValid);
    if (isValid) {
      if(query._id) {
        query._id = new ObjectID(query._id);
      }
    }
    context.params.query = query;
    return Promise.resolve(context);
  }
