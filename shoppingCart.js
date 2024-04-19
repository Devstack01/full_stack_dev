//step 1
let shoppingCart = {
    items:[],
    addItem: function(item){
        this.items.push(item);
    }
};

//step 2
function Item(name, price){
    this.name = name;
    this.price = price;
}

//step 3
let item1 = new Item('Shirt', 20);
let item2 = new Item('Pants', 30);

shoppingCart.addItem(item1);
shoppingCart.addItem(item2);

//step 4
shoppingCart.removeItem = function(index){
    this.items.splice(index, 1);
};

//step 5
shoppingCart.calculateTotal = function() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].price; 
    }
    return total;
};

//step 6
shoppingCart.applyDiscountCode = function(code){
    switch (code) {
        case 'SAVE10':
            return this.calculateTotal() * 0.9;
            case 'SAVE20':
                return this.calculateTotal() * 0.8;
                default:
                    return this.calculateTotal();
    }
};

//step 7
shoppingCart.getCurrentItems = function(){
    return this.items.map(item => item.name);
};

//step 8

console.log(shoppingCart.getCurrentItems());
shoppingCart.removeItem(0);
console.log(shoppingCart.getCurrentItems());
console.log(shoppingCart.calculateTotal());
console.log(shoppingCart.applyDiscountCode('SAVE10'));