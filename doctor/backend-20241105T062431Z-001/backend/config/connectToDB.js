const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose
    .connect('mongodb+srv://ashyamraj741:<Shyam@2004>@cluster0.k5gxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectToDB;
