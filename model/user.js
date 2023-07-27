const mongoose = require('mongoose');

//create a schema User in db

const UserSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   token_id: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
