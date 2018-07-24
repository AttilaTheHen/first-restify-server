const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/coolgames';
const promise = MongoClient.connect(MONGODB_URI, { useNewUrlParser: true });

const dbPromise = promise.then(client => {
    dbPromise.client = client;
    return client.db();
});

module.exports = dbPromise;