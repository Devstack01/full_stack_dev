const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const tasksRouter = require('./tasks');
app.use('/tasks', tasksRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});