const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemscontroller');

// Route to add a new item
router.post('/items', itemController.addItem);

// Route to get all items
router.get('/items', itemController.getAllItems);

// Route to get a specific item by ID
router.get('/items/:id', itemController.getItemById);

// Route to delete an item by ID
router.delete('/items/:id', itemController.deleteItem);

// Route to update an item by ID
router.put('/items/:id', itemController.updateItem);

module.exports = router;
