
const watchItemsModoles = require('../models/watchItem');

let watchListData = [];
const addItem = async (symbol) => {
    try{
        if (!symbol) {
            console.log(`symbol is not valid...`);
        }
        console.log(`item ${symbol} added to watch list`);
        //WatchListData.push(symbol);
        const item = new watchItemsModoles({
            symbol : symbol,
            dateCreated : Date.now()
        })
       await item.save();
    }
    catch (err) {
        console.log(`error adding items: ${err}`);
    }
}

const removeItem = async (symbol) => {
    try{
        if (!symbol) {
            console.log(`symbol is not valid...`);
        }
        console.log(`item ${symbol} removed from watch list`)
        await watchItemsModoles.deleteOne({symbol: symbol});
    }
    catch (err) {
        console.log(`error removing items: ${err}`);
    }
}

const getItems = async () => {
    try{
        console.log(`watch list item fetched...`)
        const items = await watchItemsModoles.find({});
        return items;
    }
    catch (err) {
        console.log(`error fetching items: ${err}`);
    }
}

module.exports = {
    addItem,
    removeItem,
    getItems
}