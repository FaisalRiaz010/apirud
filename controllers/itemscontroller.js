const Item = require('../model/item');
const {filename}= require('../Routes/itemsRoutes')



//add item
exports.addItem = async (req, res) => {
    try {
        const { token_id,name, description, price } = req.body;
        const image = req.file.filename; // Access the filename property of req.file

        // Create a new item by using the Item model
        const newItem = new Item({token_id, name, description, price, image});

        // Save or insert the new item to the database
        const savedItem = await newItem.save();

        // Log the saved item
        console.log('Item saved:', savedItem);

        res.status(201).json(savedItem);
    } catch (err) {
        console.error('Error adding item:', err);
        res.status(500).json({ error: 'Failed to add item' });
    }
};
//get all items 


exports.getAllItems = async (req, res) => {
    try {
        // Fetch all items from the database
        const items = await Item.find();

        // Send the array of items as the response
        res.json(items);
    } catch (err) {
        console.error('Error getting items:', err);
        res.status(500).json({ error: 'Failed to get items' });
    }
};

//get by id 
exports.getItembyID = async (req, res) => {
    try {
        const itemId = req.params.id;

        // Find  ID and remove it from the database
        const Items = await Item.findById(itemId);

        if (!Items) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json(Items);
    } catch (err) {
       
        res.status(500).json({ error: 'Failed to find item' });
    }
};


//  delete an item by ID
exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.params.id;

        // Find  ID and remove it from the database
        const deletedItem = await Item.findByIdAndRemove(itemId);

        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        console.log('Item deleted:', deletedItem);

        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        console.error('Error deleting item:', err);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

// update an item by ID
exports.updateItem = async (req, res) => {
    try {
        const image = req.file.filename;
        const itemId = req.params.id;
        const { name, description, price } = req.body;

        // Find the ID in the database and update 
        const updatedItem = await Item.findByIdAndUpdate(
            itemId,
            { name, description, price,image },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        console.log('Item updated:', updatedItem);

        res.json(updatedItem);
    } catch (err) {
        console.error('Error updating item:', err);
        res.status(500).json({ error: 'Failed to update item' });
    }
};
