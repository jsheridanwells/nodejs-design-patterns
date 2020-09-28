class InventoryItem {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${item.name} costs ${item.price}`)
    }
}

class GoldenInventoryItem {
    constructor(baseItem) {
        this.name = `Golden ${ baseItem.name }`;
        this.price = baseItem.price + 1000;
    }
}

class DiamondInventoryItem {
    constructor(baseItem) {
        this.name = `Diamond ${ baseItem.name }`;
        this.price = baseItem.price + 2000;
    }
}

module.exports = {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
};
