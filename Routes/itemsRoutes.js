const express = require('express');
const router = express.Router();
const multer = require('multer');

const itemController = require('../controllers/itemscontroller');

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() +file.originalname);
  },
});
//for apply the filter on the image file
const fileFilter = (req, file, cb) => {
  // For accepting only 'image/jpg' files
  if (file.mimetype === 'image/jpeg' || file.minetype === 'image/png') {
    console.log("I am working");
    cb(null, true);
  } else {
    // Reject file
    cb(null, false);
  }
};

// Function to filter file size not working yet
const fileSizeFilter = (req, file, cb) => {
  // Define the maximum allowed file size (e.g., 5MB)
  const maxSizeBytes = 5 * 1024 * 1024; // 5MB in bytes

  if (file.size <= maxSizeBytes) {
    // Accept the file if its size is within the limit
    cb(null, true);
  } else {
    // Reject the file if it exceeds the size limit
    cb(new Error('File size exceeds the limit'));
  }
};





const upload = multer({ storage,fileFilter,fileSizeFilter });

// items routes
router.post('/items', upload.single('image'),itemController.addItem );
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItembyID);
router.put('/items/:id', upload.single('image'), itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
