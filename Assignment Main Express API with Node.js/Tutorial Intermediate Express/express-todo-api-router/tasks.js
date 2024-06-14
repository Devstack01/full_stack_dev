const express = require('express');
const router = express.Router();

const tasks = [];

router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

router.get('/', (req, res) => {
    res.json(tasks);
});

router.post('/', (req, res) => {
    const { title, description} = req.body;
    const task = { title, description };
    tasks.push(task);
    res.status(201).json(task);
});

module.exports = router;