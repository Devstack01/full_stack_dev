const mongoose = require('mongoose');
const User = require('./user.js');

mongoose.connect('mongodb://localhost:27017/first-db-connection', {
    useNewUrlParser : true,
    useUnfiedTopology : true,
});

const db = mongoose.connection;


db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        const newUser = new User({
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
        });

        await newUser.save();
        console.log('User saved successfully');
    } catch (error) {
        console.error('Error saving user:', error);
    } finally {
        mongoose.connection.close();
    }
});

