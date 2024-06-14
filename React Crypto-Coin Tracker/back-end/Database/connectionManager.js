const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/React-Crypto-Coin-Tracker';

const connectToDb = async () => {
const dbConnection = mongoose.connection;

dbConnection.on('open', () => {
    console.log(`connected to mongoDB`);
})

dbConnection.on('error', (err) => {
    console.log(`mongoose connection error: ${err}`);
})

await mongoose.connect(dbUrl);

}


module.exports = {
    connectToDb
}

