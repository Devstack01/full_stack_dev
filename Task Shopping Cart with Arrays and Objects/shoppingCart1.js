let shoppingCart = {
    items: [],
    addItem: function(item) {
        this.items.push(item);
    }
};

function Item(name, price) {
    this.name = name;
    this.price = price;
}

let item1 = new Item('Shirt', 20);
let item2 = new Item('Pants', 30);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);

shoppingCart.removeItem = function(index) {
    this.items.splice(index, 1);
};

shoppingCart.calculateTotal = function() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++){
        total += this.items[i].price;
    }
    return total;
};

shoppingCart.applyDiscountCode = function(code) {
    switch (code) {
        case 'SAVE10':
            return this.calculateTotal() * 0.9;
        case 'SAVE20':
            return this.calculateTotal() * 0.8;
        default:
            return this.calculateTotal();
    }
};

shoppingCart.getCurrentItems = function() {
    return this.items.map(item => item.name);
};

console.log(shoppingCart.getCurrentItems());
shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems());
console.log(shoppingCart.calculateTotal());
console.log(shoppingCart.applyDiscountCode('SAVE10'));