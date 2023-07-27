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
const fileFilter=(req,file,cb)=>{
  console.log("iam working");
  //for accepting 
  if(file.minetype==='image/jpg'){
    console.log("iam working2");
    cb(null,true);
  }else{
    //reject file
    cb(null,false);

  }
}

const upload = multer({ storage });

// items routes
router.post('/items', upload.single('image'),itemController.addItem );
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItembyID);
router.put('/items/:id', upload.single('image'), itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
