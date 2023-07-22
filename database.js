const mongoose = require('mongoose');

//just connect db for Rcords 
mongoose
  .connect('mongodb+srv://mfoggyfaisal:KgbB5yvr5et0qInl@cluster0.ovsm2tn.mongodb.net/faisaldb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
