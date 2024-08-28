const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.post('/product', productController.createProduct);
router.get('/product', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.delete('/product/:id', productController.deleteProductById);
router.put('/product/:id', productController.updateProductById);
router.get('/productsearch/:name', productController.findByName);
router.get('/productavailability/:availability', productController.findByAvailability);
router.get('/productsearch/price/:price', productController.findByPrice);

module.exports = router;
