// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

   
    try {
        await client.connect();
        dbInstance = client.db(dbName);
        return dbInstance;
    } catch (error) {
        console.error("Failed to connect to DB", error);
        throw error;
    }

}

module.exports = connectToDatabase;
