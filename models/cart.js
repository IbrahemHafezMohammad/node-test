const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                try {
                    cart = JSON.parse(fileContent);
                } catch (jsonErr) {
                    console.error('Error parsing JSON:', jsonErr);
                }
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            if (existingProductIndex !== -1) {
                const existingProduct = cart.products[existingProductIndex];
                existingProduct.qty++;
            } else {
                cart.products.push({ id: id, qty: 1 });
            }
            cart.totalPrice += productPrice;

            fs.writeFile(p, JSON.stringify(cart), err => {
                if (err) {
                    console.error('Error writing file:', err);
                }
            });
        });
    }
};
