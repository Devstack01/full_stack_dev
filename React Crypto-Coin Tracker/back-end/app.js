const express = require('express');
const cors = require('cors');
const {connectToDb} = require ('./Database/connectionManager.js');

const app = new express();

const watchListModule = require('./modules/watchListModule');
const port = 3000;
app.use(cors());

app.get('/watchlist', async(req, res) => {

    const data = await watchListModule.getItems();
    res.send(data);
})

app.post('/watchlist', async (req, res) => {
    const { symbol } = req.query;
   /*  console.log(`POST - received on server`); */
   console.log(JSON.stringify(req.query));

   await watchListModule.addItem(symbol);

    /* res.send(`POST received - symbol: ${symbol}`); */
    res.send();
})

app.delete('/watchlist', async(req, res) => {
    const { symbol } = req.query;
    await watchListModule.removeItem(symbol);
    res.send();
})

connectToDb().then(() => {
    console.log(`MongoDB connection completed...`)

    app.listen(port, () => {
        console.log(`CORS-enabled Express Server started on ${port}`);
        
    })
})



/* watchListModule.addItem('BTC');
watchListModule.addItem('ADA');
watchListModule.addItem('ETH');
console.log(watchListModule.getItems());
watchListModule.removeItem('ETH');
watchListModule.removeItem('ADA');
console.log(watchListModule.getItems()); */